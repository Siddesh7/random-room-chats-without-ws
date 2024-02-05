const createNewRoom = async (name: string) => {
  try {
    console.log("posting data");
    const res = await fetch("/api/rooms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name}),
    });
    console.log("posted data");
    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    return res.json();
  } catch (error) {
    console.error("Failed to post data", error);
  }
};
export default createNewRoom;
