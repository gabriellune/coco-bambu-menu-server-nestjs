import { Module } from '@nestjs/common';
import { DishesService } from './services/DishesService';
import { DishesController } from './controllers/DishesController';
import { DatabaseModule } from 'src/providers/database/DatabaseModule';
import { dishesRepository } from './repositories/DishesRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [DishesController],
  providers: [DishesService, ...dishesRepository],
})
export class DishesModule {}
