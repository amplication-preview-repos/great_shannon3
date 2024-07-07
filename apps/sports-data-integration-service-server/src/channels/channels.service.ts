import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChannelsServiceBase } from "./base/channels.service.base";

@Injectable()
export class ChannelsService extends ChannelsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
