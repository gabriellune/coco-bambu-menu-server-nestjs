import { ApiProperty } from '@nestjs/swagger';

export class SwaggerDish {
  @ApiProperty({
    description: 'The id of the dish',
    example: 'id',
  })
  readonly _id: string;
  @ApiProperty({
    description: 'The name of the dish',
    example: 'name',
  })
  readonly name: string;
  @ApiProperty({
    description: 'The description of the dish',
    example: 'description',
  })
  readonly description: string;
  @ApiProperty({
    description: 'The ingredients of the dish',
    example: ['ingredients'],
  })
  readonly ingredients: string[];
  @ApiProperty({
    description: 'The preparation time of the dish',
    example: 25,
  })
  readonly preparationTime: number;
  @ApiProperty({
    description: 'The preparation steps of the dish',
    example: ['preparationSteps'],
  })
  readonly preparationSteps: string[];
}
