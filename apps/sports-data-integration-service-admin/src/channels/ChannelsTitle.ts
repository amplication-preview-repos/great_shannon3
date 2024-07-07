import { Channels as TChannels } from "../api/channels/Channels";

export const CHANNELS_TITLE_FIELD = "name";

export const ChannelsTitle = (record: TChannels): string => {
  return record.name?.toString() || String(record.id);
};
