import { SportsWhereInput } from "./SportsWhereInput";
import { SportsOrderByInput } from "./SportsOrderByInput";

export type SportsFindManyArgs = {
  where?: SportsWhereInput;
  orderBy?: Array<SportsOrderByInput>;
  skip?: number;
  take?: number;
};
