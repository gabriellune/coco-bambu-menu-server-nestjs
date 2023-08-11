import { CreateDishDTO } from '../../../../src/modules/dishes/models/dtos/CreateDishDTO';

export const mockCreateDishDTO = (): CreateDishDTO =>
  ({
    name: 'any name',
    description: 'any description',
    ingredients: ['any ingredients'],
    preparationTime: 10,
    preparationSteps: ['any preparation steps'],
  } as CreateDishDTO);
