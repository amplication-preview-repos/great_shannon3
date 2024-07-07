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
import { SportsWhereInput } from "./SportsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SportsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SportsWhereInput,
  })
  @ValidateNested()
  @Type(() => SportsWhereInput)
  @IsOptional()
  @Field(() => SportsWhereInput, {
    nullable: true,
  })
  every?: SportsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SportsWhereInput,
  })
  @ValidateNested()
  @Type(() => SportsWhereInput)
  @IsOptional()
  @Field(() => SportsWhereInput, {
    nullable: true,
  })
  some?: SportsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SportsWhereInput,
  })
  @ValidateNested()
  @Type(() => SportsWhereInput)
  @IsOptional()
  @Field(() => SportsWhereInput, {
    nullable: true,
  })
  none?: SportsWhereInput;
}
export { SportsListRelationFilter as SportsListRelationFilter };
