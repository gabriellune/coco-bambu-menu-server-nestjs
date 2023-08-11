import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DishesService } from '../services/DishesService';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Dish } from '../models/interfaces/Dish';
import { CreateDishDTO } from '../models/dtos/CreateDishDTO';
import { SwaggerDish } from '../../../documentation/models/SwaggerDish';

@Controller('dishes')
@ApiTags('Dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @Get()
  @ApiOkResponse({
    description: 'Find All Dishes!',
    type: SwaggerDish,
    isArray: true,
  })
  @ApiOperation({ summary: 'Find All Dishes' })
  async findAll(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Find Dish By Id!',
    type: SwaggerDish,
  })
  @ApiOperation({ summary: 'Find Dish By Id' })
  async getById(@Param('id') id: string): Promise<Dish> {
    return this.dishesService.getById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Dish Created',
    type: SwaggerDish,
  })
  @ApiOperation({ summary: 'Create Dish' })
  async create(@Body() payload: CreateDishDTO): Promise<Dish> {
    return this.dishesService.create(payload);
  }
}
