import * as graphql from "@nestjs/graphql";
import { SportsResolverBase } from "./base/sports.resolver.base";
import { Sports } from "./base/Sports";
import { SportsService } from "./sports.service";

@graphql.Resolver(() => Sports)
export class SportsResolver extends SportsResolverBase {
  constructor(protected readonly service: SportsService) {
    super(service);
  }
}
