import { SortOrder } from "../../util/SortOrder";

export type PostsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  uniqueHash?: SortOrder;
  title?: SortOrder;
  sportId?: SortOrder;
  channelId?: SortOrder;
};
