import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SportsService } from "./sports.service";
import { SportsControllerBase } from "./base/sports.controller.base";

@swagger.ApiTags("sports")
@common.Controller("sports")
export class SportsController extends SportsControllerBase {
  constructor(protected readonly service: SportsService) {
    super(service);
  }
}
