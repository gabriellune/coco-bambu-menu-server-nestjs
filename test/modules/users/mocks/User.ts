import { User } from '../../../../src/modules/users/models/interfaces/User';

export const mockUser = (): User =>
  ({
    name: 'any name',
    userName: 'anyUserName',
    email: 'email@email.com',
    password: 'hash',
  } as User);
