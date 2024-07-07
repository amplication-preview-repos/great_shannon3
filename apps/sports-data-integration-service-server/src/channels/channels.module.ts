import { Module } from "@nestjs/common";
import { ChannelsModuleBase } from "./base/channels.module.base";
import { ChannelsService } from "./channels.service";
import { ChannelsController } from "./channels.controller";
import { ChannelsResolver } from "./channels.resolver";

@Module({
  imports: [ChannelsModuleBase],
  controllers: [ChannelsController],
  providers: [ChannelsService, ChannelsResolver],
  exports: [ChannelsService],
})
export class ChannelsModule {}
