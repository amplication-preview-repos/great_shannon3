import { SortOrder } from "../../util/SortOrder";

export type ChannelsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  telegramChatId?: SortOrder;
  name?: SortOrder;
};
