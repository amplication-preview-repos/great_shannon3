import { Posts as TPosts } from "../api/posts/Posts";

export const POSTS_TITLE_FIELD = "title";

export const PostsTitle = (record: TPosts): string => {
  return record.title?.toString() || String(record.id);
};
