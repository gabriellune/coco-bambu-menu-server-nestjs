import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AddImageUrlDTO {
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
