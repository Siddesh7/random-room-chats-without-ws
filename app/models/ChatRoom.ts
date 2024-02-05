import mongoose from "mongoose";

export interface ChatRooms extends mongoose.Document {
  name: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const ChatRoomSchema = new mongoose.Schema<ChatRooms>({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
  },
});

export default mongoose.models.ChatRoom ||
  mongoose.model<ChatRooms>("ChatRoom", ChatRoomSchema);
