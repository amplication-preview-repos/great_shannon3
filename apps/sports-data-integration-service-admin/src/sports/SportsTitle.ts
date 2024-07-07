import { Sports as TSports } from "../api/sports/Sports";

export const SPORTS_TITLE_FIELD = "name";

export const SportsTitle = (record: TSports): string => {
  return record.name?.toString() || String(record.id);
};
