import React, {useContext} from "react";
import {UsernameContext} from "../layout";

type Message = {
  user: string;
  content: string;
  room: string;
};
const ChatMessages = ({messages}: {messages: Message[]}) => {
  const username = useContext(UsernameContext);
  console.log(messages);
  return (
    // Added a specific max-height for demonstration. Adjust as needed.
    // This parent div now has both a set max-height and overflow-y-auto to enable scrolling.
    <div className="py-2 overflow-y-auto" style={{maxHeight: "500px"}}>
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className={`chat ml-4 ${
              message.user === username ? `chat-end` : `chat-start`
            }`}
          >
            <div
              className={`flex flex-col ${
                message.user === username ? "items-end" : ""
              }`}
            >
              <div className="chat-bubble bg-primary">{message.content}</div>
              <p
                className={`text-[10px] ${
                  message.user === username
                    ? `text-right self-end`
                    : `text-left self-start`
                }`}
              >
                Jan 12 12:00
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
