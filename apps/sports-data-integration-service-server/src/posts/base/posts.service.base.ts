/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Posts as PrismaPosts,
  Sports as PrismaSports,
  Channels as PrismaChannels,
} from "@prisma/client";

export class PostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PostsCountArgs, "select">): Promise<number> {
    return this.prisma.posts.count(args);
  }

  async postsItems(args: Prisma.PostsFindManyArgs): Promise<PrismaPosts[]> {
    return this.prisma.posts.findMany(args);
  }
  async posts(args: Prisma.PostsFindUniqueArgs): Promise<PrismaPosts | null> {
    return this.prisma.posts.findUnique(args);
  }
  async createPosts(args: Prisma.PostsCreateArgs): Promise<PrismaPosts> {
    return this.prisma.posts.create(args);
  }
  async updatePosts(args: Prisma.PostsUpdateArgs): Promise<PrismaPosts> {
    return this.prisma.posts.update(args);
  }
  async deletePosts(args: Prisma.PostsDeleteArgs): Promise<PrismaPosts> {
    return this.prisma.posts.delete(args);
  }

  async getSport(parentId: string): Promise<PrismaSports | null> {
    return this.prisma.posts
      .findUnique({
        where: { id: parentId },
      })
      .sport();
  }

  async getChannel(parentId: string): Promise<PrismaChannels | null> {
    return this.prisma.posts
      .findUnique({
        where: { id: parentId },
      })
      .channel();
  }
}