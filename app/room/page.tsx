"use client";
import React, {useEffect} from "react";

const Room = () => {
  const form = {name: "tttest"};
  const postData = async () => {
    try {
      console.log("posting data");
      const res = await fetch("/api/rooms", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data.data);

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString());
      }
    } catch (error) {
      console.error("Failed to post data", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={postData}>
        {" "}
        click
      </button>
    </div>
  );
};

export default Room;
