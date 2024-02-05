// ChatWindow.tsx
import React, {ReactNode} from "react";

interface ChatWindowProps {
  children: ReactNode;
}

const ChatWindow: React.FC<ChatWindowProps> = ({children}) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative border rounded-xl border-primary w-[90%] md:w-3/4 h-[80vh] m-auto">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default ChatWindow;
