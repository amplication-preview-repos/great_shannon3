import { Module } from "@nestjs/common";
import { SportsModuleBase } from "./base/sports.module.base";
import { SportsService } from "./sports.service";
import { SportsController } from "./sports.controller";
import { SportsResolver } from "./sports.resolver";

@Module({
  imports: [SportsModuleBase],
  controllers: [SportsController],
  providers: [SportsService, SportsResolver],
  exports: [SportsService],
})
export class SportsModule {}
