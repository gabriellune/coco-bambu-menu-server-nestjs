import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Dish } from '../models/interfaces/Dish';
import { CreateDishDTO } from '../models/dtos/CreateDishDTO';

@Injectable()
export class DishesService {
  constructor(
    @Inject('DISH_MODEL')
    private dishModel: Model<Dish>,
  ) {}

  async findAll(): Promise<Dish[]> {
    return this.dishModel.find();
  }

  async getById(id: string): Promise<Dish> {
    return this.dishModel.findById(id);
  }

  async create(payload: CreateDishDTO): Promise<Dish> {
    return this.dishModel.create(payload);
  }
}
