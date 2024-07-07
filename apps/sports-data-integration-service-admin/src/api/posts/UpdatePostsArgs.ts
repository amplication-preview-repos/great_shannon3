import { PostsWhereUniqueInput } from "./PostsWhereUniqueInput";
import { PostsUpdateInput } from "./PostsUpdateInput";

export type UpdatePostsArgs = {
  where: PostsWhereUniqueInput;
  data: PostsUpdateInput;
};
