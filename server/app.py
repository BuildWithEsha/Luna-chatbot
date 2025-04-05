from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
import httpx

load_dotenv()
KEY = os.getenv("OPENROUTER_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.post("/send/")
async def getmsg(msg: Message):
    user_input = msg.message

    headers = {
        "Authorization": f"Bearer {KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173/",  # React app URL
        "X-Title": "Luna Chat App"
    }

    payload = {
        "model": "google/gemini-2.0-flash-thinking-exp:free",  
        "messages": [
            {
                "role": "system",
                "content": (
                    "🚫 No code. Do NOT use asterisks (*), markdown, or long paragraphs.\n\n"
                    "✅ Force critical thinking. Keep answers short, clear, and in plain English.\n\n"
                    "🔹 Use 4–5 bullet points max.\n"
                    "🔹 Explain concepts using real-life examples if helpful.\n"
                    "🔹 Use emojis to make it fun, but don't overdo it.\n\n"
                )

            },
            {
                "role": "user",
                "content": user_input
            }
        ]
    }

    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            response = await client.post("https://openrouter.ai/api/v1/chat/completions",
            headers=headers, json=payload)
            data = response.json()
            print("FULL RESPONSE:", data)
            ai_reply = data.get("choices", [{"message": {"content": "Hmm... Luna's quiet today."}}])[0]["message"]["content"]
            return {"your message": ai_reply}
    except Exception as e:
        print("OpenRouter Error:", str(e))
        return {"your message": "Oops! Luna couldn't respond right now 😢"}
