import { LoginDTO } from '../../../../src/modules/authentication/models/dtos/LoginDTO';

export const mockLoginDTO = (): LoginDTO =>
  ({
    userName: 'userName',
    password: 'password',
  } as LoginDTO);
