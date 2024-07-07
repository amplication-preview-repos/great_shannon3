import { PostsCreateNestedManyWithoutSportsItemsInput } from "./PostsCreateNestedManyWithoutSportsItemsInput";

export type SportsCreateInput = {
  description?: string | null;
  name?: string | null;
  postsItems?: PostsCreateNestedManyWithoutSportsItemsInput;
};
