import dbConnect from "../../lib/dbConnect";
import ChatRoom from "../../models/ChatRoom";

import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    await dbConnect();

    const body = await req.json();
    const chatRoomExists = await ChatRoom.findOne({name: body.name});
    let chatRoom;
    if (chatRoomExists) {
      chatRoom = await ChatRoom.create({name: `${body.name}-${Date.now()}`});
    } else {
      chatRoom = await ChatRoom.create({name: body.name});
    }
    return new NextResponse(JSON.stringify({data: chatRoom}), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({message: "Internal server error"}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function GET(req: NextRequest): Promise<Response> {
  try {
    await dbConnect();
    const chatRooms = await ChatRoom.find({});
    return new NextResponse(JSON.stringify({data: chatRooms}), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({message: "Internal server error"}),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
