import { Module } from '@nestjs/common';
import { DishesModule } from './modules/dishes/DishesModule';
import { UsersModule } from './modules/users/UsersModule';

@Module({
  imports: [DishesModule, UsersModule],
})
export class AppModule {}
