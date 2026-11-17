export type AdventureCategory =
  | "hiking"
  | "trail-running"
  | "expedition";

export type AdventureDifficulty =
  | "easy"
  | "moderate"
  | "challenging"
  | "extreme";

export interface AdventureSummary {
  id: string;
  title: string;
  slug: string;
  category: AdventureCategory;
  difficulty: AdventureDifficulty;
  durationDays: number;
  distanceKm?: number;
  elevationGainM?: number;
  priceFromBAM?: number;
  coverImageUrl?: string;
}