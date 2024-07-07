import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostsService } from "./posts.service";
import { PostsControllerBase } from "./base/posts.controller.base";

@swagger.ApiTags("posts")
@common.Controller("posts")
export class PostsController extends PostsControllerBase {
  constructor(protected readonly service: PostsService) {
    super(service);
  }
}
