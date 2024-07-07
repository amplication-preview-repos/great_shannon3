import { PostsCreateNestedManyWithoutChannelsItemsInput } from "./PostsCreateNestedManyWithoutChannelsItemsInput";

export type ChannelsCreateInput = {
  telegramChatId?: string | null;
  name?: string | null;
  postsItems?: PostsCreateNestedManyWithoutChannelsItemsInput;
};
