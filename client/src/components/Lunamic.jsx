import React, { useState, useRef } from "react";
import { FaMicrophone } from "react-icons/fa";
import { ReactMediaRecorder } from "react-media-recorder";

export const Lunamic = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const mediaRecorderRef = useRef(null);

  const handleRecording = (startRecording, stopRecording) => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording((prevState) => !prevState);
  };

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => {
          // Updating the blob URL here after recording
          if (mediaBlobUrl && mediaBlobUrl !== mediaBlobUrl) {
            setMediaBlobUrl(mediaBlobUrl);
          }
          return (
            <div>
              <p>{status}</p>
              <FaMicrophone
                className={`text-white text-4xl ml-2 mb-2 size-8 cursor-pointer hover:text-purple-400 ${
                  isRecording ? "text-red-500" : ""
                }`}
                onClick={() => handleRecording(startRecording, stopRecording)}
              />
              {mediaBlobUrl && (
                <audio src={mediaBlobUrl} controls autoPlay loop />
              )}
            </div>
          );
        }}
      />
    </div>
  );
};
