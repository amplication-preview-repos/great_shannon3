import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostsServiceBase } from "./base/posts.service.base";

@Injectable()
export class PostsService extends PostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
