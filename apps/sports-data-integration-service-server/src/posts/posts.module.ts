import { Module } from "@nestjs/common";
import { PostsModuleBase } from "./base/posts.module.base";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { PostsResolver } from "./posts.resolver";

@Module({
  imports: [PostsModuleBase],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver],
  exports: [PostsService],
})
export class PostsModule {}
