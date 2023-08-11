import { Module } from '@nestjs/common';
import { DishesModule } from './modules/dishes/DishesModule';
import { UsersModule } from './modules/users/UsersModule';
import { AuthenticationModule } from './modules/authentication/AuthenticationModule';

@Module({
  imports: [DishesModule, UsersModule, AuthenticationModule],
})
export class AppModule {}
