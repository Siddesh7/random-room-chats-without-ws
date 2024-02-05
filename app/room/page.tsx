import ChatRoom, {ChatRooms} from "../models/ChatRoom";
import dbConnect from "../lib/dbConnect";
import Link from "next/link";

export default async function Home() {
  const chatRooms = await getAllChatRooms();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col justify-center  items-center">
          <div className="max-w-md text-center">
            {" "}
            <h1 className="text-5xl text-primary font-bold">
              Chat rooms already created
            </h1>
          </div>
          <div className="m-8 grid grid-rows-4 grid-flow-col gap-4">
            {chatRooms?.map((chatRoom) => {
              return (
                <div key={chatRoom._id}>
                  <Link href={`/room/${chatRoom.name}`}>
                    <button className="btn btn-neutral w-44">
                      {chatRoom.name}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getAllChatRooms() {
  await dbConnect();

  /* find all the data in our database */
  const result = await ChatRoom.find({});

  /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  const chatRooms = result.map((doc) => {
    const chatRoom = JSON.parse(JSON.stringify(doc));
    return chatRoom;
  });

  return chatRooms.reverse();
}
