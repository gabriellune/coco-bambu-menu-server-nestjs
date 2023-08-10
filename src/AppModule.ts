import { Module } from '@nestjs/common';
import { DishesModule } from './modules/dishes/DishesModule';

@Module({
  imports: [DishesModule],
})
export class AppModule {}
