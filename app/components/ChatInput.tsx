"use client";
import React, {useState} from "react";
import {IoIosSend} from "react-icons/io";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({onSend}) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== "") {
      onSend(message);
      setMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="flex-none h-[12%] relative w-[100%] rounded-b-xl p-4 bg-opacity-30 bg-white backdrop-blur-md">
      <div className="flex flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-xl input-accent w-[95%]"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          value={message}
        />
        <div
          className="w-[5%] cursor-pointer"
          onClick={() => {
            onSend(message);
            setMessage(""); // Clear the input field after sending the message
          }}
        >
          <IoIosSend size={"2rem"} />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
