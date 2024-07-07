import { Sports } from "../sports/Sports";
import { Channels } from "../channels/Channels";

export type Posts = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  uniqueHash: string | null;
  title: string | null;
  sport?: Sports | null;
  channel?: Channels | null;
};
