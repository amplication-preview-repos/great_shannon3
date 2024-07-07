import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostsListRelationFilter } from "../posts/PostsListRelationFilter";

export type ChannelsWhereInput = {
  id?: StringFilter;
  telegramChatId?: StringNullableFilter;
  name?: StringNullableFilter;
  postsItems?: PostsListRelationFilter;
};
