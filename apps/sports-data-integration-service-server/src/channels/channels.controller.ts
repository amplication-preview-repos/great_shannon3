import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChannelsService } from "./channels.service";
import { ChannelsControllerBase } from "./base/channels.controller.base";

@swagger.ApiTags("channels")
@common.Controller("channels")
export class ChannelsController extends ChannelsControllerBase {
  constructor(protected readonly service: ChannelsService) {
    super(service);
  }
}
