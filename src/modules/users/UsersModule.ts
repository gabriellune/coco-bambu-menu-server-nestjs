import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/DatabaseModule';
import { UsersController } from './controllers/UsersController';
import { UsersService } from './services/UsersService';
import { usersRepository } from './repositories/UsersRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersRepository],
  exports: [UsersService, ...usersRepository],
})
export class UsersModule {}
