import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SportsWhereUniqueInput } from "../sports/SportsWhereUniqueInput";
import { ChannelsWhereUniqueInput } from "../channels/ChannelsWhereUniqueInput";

export type PostsWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  uniqueHash?: StringNullableFilter;
  title?: StringNullableFilter;
  sport?: SportsWhereUniqueInput;
  channel?: ChannelsWhereUniqueInput;
};
