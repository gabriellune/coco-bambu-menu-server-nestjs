import { ApiProperty } from '@nestjs/swagger';

export class SwaggerUploadDishImage {
  @ApiProperty({
    description: 'The url from the uploaded image',
    example: 'url.com',
  })
  url: string;
}
