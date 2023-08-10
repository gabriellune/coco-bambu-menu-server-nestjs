import { Dish } from '../../src/modules/dishes/models/interfaces/Dish';

export const mockDish = (): Dish =>
  ({
    name: 'any name',
    description: 'any description',
    ingredients: ['any ingredients'],
    preparationTime: 10,
    preparationSteps: ['any preparation steps'],
  } as Dish);
