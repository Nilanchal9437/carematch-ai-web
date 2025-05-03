import mongoose, { Schema, Document } from "mongoose";

interface IChat extends Document {
  careFor: string;
  age: number;
  currentLocation: string;
  preferredLocation: string;
  careType: string[];
  dailyActivities: string[];
  conditions: string[];
  mobilityAids: string[];
  residenceType: string;
  budget: string;
  insurance: string;
  dietaryPreferences: string;
  religiousPreferences: string;
  socialInteraction: string;
  moveInTimeline: string;
  inFacility: string;
  stayDuration: string;
  mainConcern: string;
  fullName: string;
  contactInfo: string;
  created_at: Date;
}

const ChatSchema: Schema = new Schema({
  careFor: { type: String, required: true },
  age: { type: Number, required: true },
  currentLocation: { type: String, required: true },
  preferredLocation: { type: String, required: true },
  careType: { type: Array, required: true },
  dailyActivities: { type: Array, required: true },
  conditions: { type: Array, required: true },
  mobilityAids: { type: Array, required: true },
  residenceType: { type: String, required: true },
  budget: { type: String, required: true },
  insurance: { type: String, required: true },
  dietaryPreferences: { type: String, required: true },
  religiousPreferences: { type: String, required: true },
  socialInteraction: { type: String, required: true },
  moveInTimeline: { type: String, required: true },
  inFacility: { type: String, required: true },
  stayDuration: { type: String, required: true },
  mainConcern: { type: String, required: true },
  fullName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  created_at: { type: Date, required: true },
});

const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);

export default Chat;
