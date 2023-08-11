import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'The userName of the user',
    example: 'userName',
  })
  @IsNotEmpty()
  @IsString()
  userName: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
