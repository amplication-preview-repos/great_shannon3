import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SportsServiceBase } from "./base/sports.service.base";

@Injectable()
export class SportsService extends SportsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
