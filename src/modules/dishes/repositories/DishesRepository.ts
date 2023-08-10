import { Connection } from 'mongoose';
import { DishSchema } from '../models/schemas/DishSchema';

export const dishesRepository = [
  {
    provide: 'DISH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Dish', DishSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
