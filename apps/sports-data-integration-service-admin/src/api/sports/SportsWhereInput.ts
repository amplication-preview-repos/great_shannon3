import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostsListRelationFilter } from "../posts/PostsListRelationFilter";

export type SportsWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  postsItems?: PostsListRelationFilter;
};
