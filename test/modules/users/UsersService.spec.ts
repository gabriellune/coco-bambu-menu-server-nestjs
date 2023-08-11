import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../../../src/modules/users/models/dtos/CreateUserDTO';
import { User } from '../../../src/modules/users/models/interfaces/User';
import { UsersService } from '../../../src/modules/users/services/UsersService';
import { mockCreateUserDTO } from './mocks/CreateUserDTO';
import { mockUser } from './mocks/User';

const userModelMock: Partial<Model<User>> = {
  find: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  findOne: jest.fn(),
};

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'USER_MODEL',
          useValue: userModelMock,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of dishes', async () => {
      jest.spyOn(userModelMock, 'find').mockResolvedValue([mockUser()]);
      const mockDishes: User[] = [mockUser()];

      userModelMock.find();

      const result = await usersService.findAll();

      expect(result).toEqual(mockDishes);
    });
  });

  describe('getById', () => {
    it('should return a dish by Id', async () => {
      jest.spyOn(userModelMock, 'findById').mockResolvedValue(mockUser());
      const mockId = 'mock-id';
      const result = await usersService.getById(mockId);

      expect(result).toEqual(mockUser());
      expect(userModelMock.findById).toHaveBeenCalledWith(mockId);
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      jest.spyOn(userModelMock, 'create').mockImplementation();
      const createUserDTO: CreateUserDTO = mockCreateUserDTO();

      await usersService.create(createUserDTO);
      expect(userModelMock.create).toHaveBeenCalled();
    });
  });
});
