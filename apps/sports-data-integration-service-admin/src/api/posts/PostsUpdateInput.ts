import { SportsWhereUniqueInput } from "../sports/SportsWhereUniqueInput";
import { ChannelsWhereUniqueInput } from "../channels/ChannelsWhereUniqueInput";

export type PostsUpdateInput = {
  content?: string | null;
  uniqueHash?: string | null;
  title?: string | null;
  sport?: SportsWhereUniqueInput | null;
  channel?: ChannelsWhereUniqueInput | null;
};
