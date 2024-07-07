import { PostsUpdateManyWithoutChannelsItemsInput } from "./PostsUpdateManyWithoutChannelsItemsInput";

export type ChannelsUpdateInput = {
  telegramChatId?: string | null;
  name?: string | null;
  postsItems?: PostsUpdateManyWithoutChannelsItemsInput;
};
