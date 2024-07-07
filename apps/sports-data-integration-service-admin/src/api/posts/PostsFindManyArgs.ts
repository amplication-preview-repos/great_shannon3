import { PostsWhereInput } from "./PostsWhereInput";
import { PostsOrderByInput } from "./PostsOrderByInput";

export type PostsFindManyArgs = {
  where?: PostsWhereInput;
  orderBy?: Array<PostsOrderByInput>;
  skip?: number;
  take?: number;
};
