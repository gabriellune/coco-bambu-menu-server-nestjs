import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/UsersService';
import { CreateUserDTO } from '../models/dtos/CreateUserDTO';
import { User } from '../models/interfaces/User';
import { SwaggerUser } from 'src/documentation/models/SwaggerUser';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOkResponse({
    description: 'Find All Users!',
    type: SwaggerUser,
    isArray: true,
  })
  @ApiOperation({ summary: 'Find All Users' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Find User By Id!',
    type: SwaggerUser,
  })
  @ApiOperation({ summary: 'Find Dish By Id' })
  async getById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Get('user-name/:username')
  @ApiOkResponse({
    description: 'Find User By UserName!',
    type: SwaggerUser,
  })
  @ApiOperation({ summary: 'Find User By UserName' })
  async getByUserName(@Param('username') userName: string): Promise<User> {
    return this.usersService.getByUserName(userName);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'User Created',
    type: SwaggerUser,
  })
  @ApiOperation({ summary: 'Create User' })
  async create(@Body() payload: CreateUserDTO): Promise<User> {
    return this.usersService.create(payload);
  }
}
