import dbConnect from "../../lib/dbConnect";
import Message from "../../models/Message";

import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    await dbConnect();

    const body = await req.json();

    const {roomId, content, user} = body;
    const message = await Message.create({room: roomId, content, user});

    return new NextResponse(JSON.stringify({data: message}), {
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
    const url = new URL(req.url);
    const roomId = url.searchParams.get("roomId");

    if (!roomId) {
      return new NextResponse(
        JSON.stringify({message: "roomId query parameter is required"}),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const messages = await Message.find({room: roomId});
    return new NextResponse(JSON.stringify({data: messages}), {
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
