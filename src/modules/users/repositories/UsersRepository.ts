import { Connection } from 'mongoose';
import { UserSchema } from '../models/schemas/UserSchema';

export const usersRepository = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
