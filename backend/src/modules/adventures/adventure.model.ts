import mongoose, { Schema } from "mongoose";

export interface IAdventure {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: "hiking" | "trail-running" | "expedition";
  difficulty: "easy" | "moderate" | "challenging" | "extreme";
  durationDays: number;
  distanceKm?: number;
  elevationGainM?: number;
  priceFromBAM?: number;
  maxGroupSize: number;
  images: string[];
  isPublished: boolean;
}

const adventureSchema = new Schema<IAdventure>(
  {
    title: { type: String, required: true, trim: true, minlength: 5, maxlength: 120},
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true, trim: true, maxlength: 5000},
    shortDescription: { type: String, required: true, trim: true, maxlength: 300 },
    category: { type: String, enum: ["hiking", "trail-running", "expedition"], required: true },
    difficulty: { type: String, enum: ["easy", "moderate", "challenging", "extreme"], required: true },
    durationDays: { type: Number, required: true, min: 1 },
    distanceKm: { type: Number, required: false },
    elevationGainM: { type: Number, required: false },
    priceFromBAM: { type: Number, min: 0 },
    maxGroupSize: { type: Number, required: true, min: 1 },
    images: { type: [String],   default: [] },
    isPublished: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true
  }
);

export const Adventure = mongoose.model("Adventure", adventureSchema);