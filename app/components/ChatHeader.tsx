import React from "react";

const ChatHeader = ({roomId}: {roomId: string}) => {
  return (
    <div className="rounded-t-xl py-4 px-8 bg-opacity-30 w-[100%] bg-white backdrop-blur-md flex-none h-[12%]">
      <p className="text-4xl font-bold ">{roomId}</p>
    </div>
  );
};

export default ChatHeader;
