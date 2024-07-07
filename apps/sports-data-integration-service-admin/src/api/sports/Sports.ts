import { Posts } from "../posts/Posts";

export type Sports = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  postsItems?: Array<Posts>;
};
