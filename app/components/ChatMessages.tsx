import React, {useContext, useEffect, useRef} from "react";
import {UsernameContext} from "../layout";
import formatTimestamp from "../lib/formatTimestamp";

type Message = {
  user: string;
  content: string;
  room: string;
  timestamp: string;
};
const ChatMessages = ({messages}: {messages: Message[]}) => {
  const username = useContext(UsernameContext);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom every time messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  console.log(messages);
  return (
    // Added a specific max-height for demonstration. Adjust as needed.
    // This parent div now has both a set max-height and overflow-y-auto to enable scrolling.
    <div className="py-2 overflow-y-auto flex-grow">
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
              <div className="chat-bubble bg-primary">
                {" "}
                <p className="text-[14px] text-neutral">{message.user}</p>
                {message.content}
              </div>

              <p
                className={`text-[10px] ${
                  message.user === username
                    ? `text-right self-end`
                    : `text-left self-start`
                }`}
              >
                {formatTimestamp(message.timestamp)}
              </p>
            </div>
          </div>
        );
      })}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatMessages;
