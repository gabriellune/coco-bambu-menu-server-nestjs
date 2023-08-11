import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../models/interfaces/User';
import { CreateUserDTO } from '../models/dtos/CreateUserDTO';
import { hashPassword } from '../../../utils/BCrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async getByUserName(userName: string): Promise<User> {
    const dish = await this.userModel.findOne({ userName });

    if (!dish) {
      throw new BadRequestException('User not found!');
    }

    return dish;
  }

  async getById(id: string): Promise<User> {
    const dish = await this.userModel.findById(id);

    if (!dish) {
      throw new BadRequestException('User not found!');
    }

    return dish;
  }

  async create(payload: CreateUserDTO): Promise<User> {
    const { password, ...rest } = payload;
    const hashedPassword = hashPassword(password);
    return this.userModel.create({ password: hashedPassword, ...rest });
  }
}
