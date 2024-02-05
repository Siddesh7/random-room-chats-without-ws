import mongoose from "mongoose";

export interface Messages extends mongoose.Document {
  room: string;
  content: string;
  user: string;
  timestamp: Date;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const MessageSchema = new mongoose.Schema<Messages>({
  room: {
    type: String,
    required: [true, "Please provide a valid roomid."],
  },

  content: {
    type: String,
    required: [true, "Please provide a valid content."],
  },
  user: {
    type: String,
    required: [true, "Please provide a valid user."],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Message ||
  mongoose.model<Messages>("Message", MessageSchema);
