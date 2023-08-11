import { ApiProperty } from '@nestjs/swagger';

export class SwaggerLoginResponse {
  @ApiProperty({
    description: 'The token to user another routes',
    example: 'token',
  })
  accessToken: string;
}
