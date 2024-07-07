import * as graphql from "@nestjs/graphql";
import { PostsResolverBase } from "./base/posts.resolver.base";
import { Posts } from "./base/Posts";
import { PostsService } from "./posts.service";

@graphql.Resolver(() => Posts)
export class PostsResolver extends PostsResolverBase {
  constructor(protected readonly service: PostsService) {
    super(service);
  }
}
