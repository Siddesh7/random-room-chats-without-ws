"use client";
import React, {useContext, useEffect, useState} from "react";
import ChatWindow from "../../components/ChatWindow"; // Adjust the import path as necessary
import ChatHeader from "@/app/components/ChatHeader";
import ChatMessages from "@/app/components/ChatMessages";
import ChatInput from "@/app/components/ChatInput";
import {UsernameContext} from "@/app/layout";
import createNewRoom from "@/app/lib/createNewRoom";

const ChatApp = ({params}: {params: {id: string}}) => {
  const username = useContext(UsernameContext);

  const [messages, setMessages] = useState([]);
  const sendMessage = async (message: string) => {
    try {
      console.log("posting you message");
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          user: username,
          roomId: params.id,
        }),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      const data = await res.json();
      getMessages();
    } catch (error) {
      console.error("Failed to post data", error);
    }
  };
  const getMessages = async () => {
    try {
      console.log("getting messages");
      const url = new URL("/api/message", window.location.origin);
      if (params && params.id) url.searchParams.append("roomId", params.id);

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }

      const data = await res.json();
      setMessages(data.data);
    } catch (error) {
      console.error("Failed to post data", error);
    }
  };
  const checkIfRoomExists = async () => {
    try {
      console.log("checking if room exists");
      const url = new URL("/api/rooms", window.location.origin);
      if (params && params.id) url.searchParams.append("roomId", params.id);

      const res = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.log("room does not exist");
        await createNewRoom(params.id);
      }
    } catch (error) {
      console.error("Failed to post data", error);
    }
  };

  useEffect(() => {
    getMessages();
    checkIfRoomExists();
  }, []);
  return (
    <ChatWindow>
      <ChatHeader roomId={params.id} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </ChatWindow>
  );
};

export default ChatApp;
