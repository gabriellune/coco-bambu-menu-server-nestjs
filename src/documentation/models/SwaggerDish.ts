import { ApiProperty } from '@nestjs/swagger';

export class SwaggerDish {
  @ApiProperty({
    description: 'The id of the dish',
    example: 'id',
  })
  _id: string;
  @ApiProperty({
    description: 'The name of the dish',
    example: 'name',
  })
  name: string;
  @ApiProperty({
    description: 'The description of the dish',
    example: 'description',
  })
  description: string;
  @ApiProperty({
    description: 'The ingredients of the dish',
    example: ['ingredients'],
  })
  ingredients: string[];
  @ApiProperty({
    description: 'The preparation time of the dish',
    example: 25,
  })
  preparationTime: number;
  @ApiProperty({
    description: 'The preparation steps of the dish',
    example: ['preparationSteps'],
  })
  preparationSteps: string[];
}
