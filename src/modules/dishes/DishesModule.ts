import { Module } from '@nestjs/common';
import { DishesService } from './services/DishesService';
import { DishesController } from './controllers/DishesController';
import { DatabaseModule } from 'src/providers/database/DatabaseModule';
import { dishesRepository } from './repositories/DishesRepository';
import { CloudinaryModule } from 'src/providers/cloudinary/CloudinaryModule';
import { CloudinaryService } from './services/CloudinaryService';

@Module({
  imports: [DatabaseModule, CloudinaryModule],
  controllers: [DishesController],
  providers: [DishesService, ...dishesRepository, CloudinaryService],
})
export class DishesModule {}
