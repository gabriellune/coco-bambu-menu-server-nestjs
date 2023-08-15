import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Dish } from '../models/interfaces/Dish';
import { CreateDishDTO } from '../models/dtos/CreateDishDTO';
import { CloudinaryService } from './CloudinaryService';
import { AddImageUrlDTO } from '../models/dtos/AddImageUrlDTO';

@Injectable()
export class DishesService {
  constructor(
    @Inject('DISH_MODEL')
    private dishModel: Model<Dish>,
    private cloudinaryService: CloudinaryService,
  ) {}

  async findAll(): Promise<Dish[]> {
    return this.dishModel.find();
  }

  async getById(id: string): Promise<Dish> {
    const dish = await this.dishModel.findById(id);

    if (!dish) {
      throw new BadRequestException('Dish not found!');
    }

    return dish;
  }

  async create(payload: CreateDishDTO): Promise<Dish> {
    return this.dishModel.create(payload);
  }

  async uploadDishImage(file: Express.Multer.File): Promise<{ url: string }> {
    return this.cloudinaryService.uploadFile(file);
  }

  async delete(id: string): Promise<void> {
    await this.dishModel.deleteOne({ _id: id });
  }

  async addImageUrl(id: string, payload: AddImageUrlDTO): Promise<Dish> {
    const dish = await this.getById(id);

    if (!dish) {
      throw new BadRequestException('Dish not found!');
    }

    const { _id, ...rest } = dish.toObject();

    const buildedDish = { ...rest, ...payload };

    await this.dishModel.updateOne({ _id }, buildedDish);

    return buildedDish;
  }
}
