import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SwaggerUser {
  @ApiProperty({
    description: 'The id of the user',
    example: 'id',
  })
  _id: string;
  @ApiProperty({
    description: 'The name of the user',
    example: 'name',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'email',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

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
