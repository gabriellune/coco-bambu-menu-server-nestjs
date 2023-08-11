import { CreateUserDTO } from '../../../../src/modules/users/models/dtos/CreateUserDTO';

export const mockCreateUserDTO = (): CreateUserDTO =>
  ({
    name: 'any name',
    userName: 'anyUserName',
    email: 'email@email.com',
    password: 'hash',
  } as CreateUserDTO);
