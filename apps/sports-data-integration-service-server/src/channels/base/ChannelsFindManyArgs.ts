/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChannelsWhereInput } from "./ChannelsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChannelsOrderByInput } from "./ChannelsOrderByInput";

@ArgsType()
class ChannelsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChannelsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChannelsWhereInput, { nullable: true })
  @Type(() => ChannelsWhereInput)
  where?: ChannelsWhereInput;

  @ApiProperty({
    required: false,
    type: [ChannelsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChannelsOrderByInput], { nullable: true })
  @Type(() => ChannelsOrderByInput)
  orderBy?: Array<ChannelsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChannelsFindManyArgs as ChannelsFindManyArgs };
