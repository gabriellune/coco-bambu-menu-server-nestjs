import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DishesService } from '../services/DishesService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Dish } from '../models/interfaces/Dish';
import { CreateDishDTO } from '../models/dtos/CreateDishDTO';
import { SwaggerDish } from '../../../documentation/models/SwaggerDish';
import { FileInterceptor } from '@nestjs/platform-express';
import { SwaggerUploadDishImage } from 'src/documentation/models/SwaggerUploadDishImage';
import { AddImageUrlDTO } from '../models/dtos/AddImageUrlDTO';
import { AuthGuard } from 'src/modules/authentication/shared/AuthGuard';

@Controller('dishes')
@ApiTags('Dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOkResponse({
    description: 'Find Dish By Id!',
    type: SwaggerDish,
  })
  @ApiOperation({ summary: 'Find Dish By Id' })
  async getById(@Param('id') id: string): Promise<Dish> {
    return this.dishesService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({
    description: 'Dish Created',
    type: SwaggerDish,
  })
  @ApiOperation({ summary: 'Create Dish' })
  async create(@Body() payload: CreateDishDTO): Promise<Dish> {
    return this.dishesService.create(payload);
  }

  @UseGuards(AuthGuard)
  @Post('image/upload')
  @ApiCreatedResponse({
    description: 'Image uploaded',
    type: SwaggerUploadDishImage,
  })
  @ApiOperation({ summary: 'Upload Dish Image' })
  @UseInterceptors(FileInterceptor('file'))
  uploadDishImage(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    return this.dishesService.uploadDishImage(file);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete Dish by Id' })
  async delete(@Param('id') id: string): Promise<void> {
    void this.dishesService.delete(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id/add-image-url')
  @ApiOkResponse({
    description: 'Add Images to Dish!',
    type: SwaggerDish,
  })
  @ApiOperation({ summary: 'Add image url' })
  async addImageUrl(
    @Param('id') id: string,
    @Body() payload: AddImageUrlDTO,
  ): Promise<Dish> {
    return this.dishesService.addImageUrl(id, payload);
  }
}
