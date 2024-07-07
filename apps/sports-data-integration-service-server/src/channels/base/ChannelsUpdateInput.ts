/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { PostsUpdateManyWithoutChannelsItemsInput } from "./PostsUpdateManyWithoutChannelsItemsInput";
import { Type } from "class-transformer";

@InputType()
class ChannelsUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telegramChatId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PostsUpdateManyWithoutChannelsItemsInput,
  })
  @ValidateNested()
  @Type(() => PostsUpdateManyWithoutChannelsItemsInput)
  @IsOptional()
  @Field(() => PostsUpdateManyWithoutChannelsItemsInput, {
    nullable: true,
  })
  postsItems?: PostsUpdateManyWithoutChannelsItemsInput;
}

export { ChannelsUpdateInput as ChannelsUpdateInput };