import { Posts } from "../posts/Posts";

export type Channels = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  telegramChatId: string | null;
  name: string | null;
  postsItems?: Array<Posts>;
};
