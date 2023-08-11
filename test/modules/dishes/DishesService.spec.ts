import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { CreateDishDTO } from '../../../src/modules/dishes/models/dtos/CreateDishDTO';
import { Dish } from '../../../src/modules/dishes/models/interfaces/Dish';
import { DishesService } from '../../../src/modules/dishes/services/DishesService';
import { mockDish } from './mocks/Dish';
import { mockCreateDishDTO } from './mocks/CreateDishDTO';

const dishModelMock: Partial<Model<Dish>> = {
  find: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
};

describe('DishesService', () => {
  let dishesService: DishesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DishesService,
        {
          provide: 'DISH_MODEL',
          useValue: dishModelMock,
        },
      ],
    }).compile();

    dishesService = module.get<DishesService>(DishesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(dishesService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of dishes', async () => {
      jest.spyOn(dishModelMock, 'find').mockResolvedValue([mockDish()]);
      const mockDishes: Dish[] = [mockDish()];

      dishModelMock.find();

      const result = await dishesService.findAll();

      expect(result).toEqual(mockDishes);
    });
  });

  describe('getById', () => {
    it('should return a dish by Id', async () => {
      jest.spyOn(dishModelMock, 'findById').mockResolvedValue(mockDish());
      const mockId = 'mock-id';
      const result = await dishesService.getById(mockId);

      expect(result).toEqual(mockDish());
      expect(dishModelMock.findById).toHaveBeenCalledWith(mockId);
    });
  });

  describe('create', () => {
    it('should create a new dish', async () => {
      jest.spyOn(dishModelMock, 'create').mockImplementation();
      const createDishDTO: CreateDishDTO = mockCreateDishDTO();

      await dishesService.create(createDishDTO);
      expect(dishModelMock.create).toHaveBeenCalledWith(createDishDTO);
    });
  });
});
