import { ChannelsWhereInput } from "./ChannelsWhereInput";
import { ChannelsOrderByInput } from "./ChannelsOrderByInput";

export type ChannelsFindManyArgs = {
  where?: ChannelsWhereInput;
  orderBy?: Array<ChannelsOrderByInput>;
  skip?: number;
  take?: number;
};
