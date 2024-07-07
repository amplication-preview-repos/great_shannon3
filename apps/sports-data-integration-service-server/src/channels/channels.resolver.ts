import * as graphql from "@nestjs/graphql";
import { ChannelsResolverBase } from "./base/channels.resolver.base";
import { Channels } from "./base/Channels";
import { ChannelsService } from "./channels.service";

@graphql.Resolver(() => Channels)
export class ChannelsResolver extends ChannelsResolverBase {
  constructor(protected readonly service: ChannelsService) {
    super(service);
  }
}
