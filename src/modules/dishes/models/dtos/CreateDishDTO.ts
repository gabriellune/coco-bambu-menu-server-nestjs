import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDishDTO {
  @ApiProperty({
    description: 'The name of the dish',
    example: 'name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The description of the dish',
    example: 'description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'The ingredients of the dish',
    example: ['ingredients'],
  })
  @IsNotEmpty()
  @IsArray()
  ingredients: string[];

  @ApiProperty({
    description: 'The preparation time of the dish',
    example: 25,
  })
  @IsNotEmpty()
  @IsNumber()
  preparationTime: number;

  @ApiProperty({
    description: 'The preparation steps of the dish',
    example: ['preparationSteps'],
  })
  @IsNotEmpty()
  @IsArray()
  preparationSteps: string[];

  @ApiProperty({
    description: 'The url from big image of the dish',
    example: 'url.com',
  })
  @IsOptional()
  @IsString()
  bigImageUrl: string;

  @ApiProperty({
    description: 'The url from small image of the dish',
    example: 'url.com',
  })
  @IsOptional()
  @IsString()
  smallImageUrl: string;
}
