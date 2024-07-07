import { PostsUpdateManyWithoutSportsItemsInput } from "./PostsUpdateManyWithoutSportsItemsInput";

export type SportsUpdateInput = {
  description?: string | null;
  name?: string | null;
  postsItems?: PostsUpdateManyWithoutSportsItemsInput;
};
