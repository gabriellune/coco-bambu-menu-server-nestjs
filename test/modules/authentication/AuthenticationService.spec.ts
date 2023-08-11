import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from '../../../src/modules/authentication/services/AuthenticationService';
import { UsersService } from '../../../src/modules/users/services/UsersService';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { compareHash } from '../../../src/utils/BCrypt';
import { mockUser } from '../users/mocks/User';
import { Model } from 'mongoose';
import { User } from '../../../src/modules/users/models/interfaces/User';

const userModelMock: Partial<Model<User>> = {
  findOne: jest.fn(),
};

jest.mock('../../../src/utils/BCrypt', () => ({
  compareHash: jest.fn(),
}));

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthenticationService,
        UsersService,
        JwtService,
        {
          provide: 'USER_MODEL',
          useValue: userModelMock,
        },
      ],
    }).compile();

    authenticationService = module.get<AuthenticationService>(
      AuthenticationService,
    );
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should throw UnauthorizedException if password does not match', async () => {
      jest
        .spyOn(usersService, 'getByUserName')
        .mockResolvedValueOnce(mockUser());
      (compareHash as jest.Mock).mockReturnValueOnce(false);

      await expect(
        authenticationService.login('existingUser', 'incorrectPassword'),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should return access token if login is successful', async () => {
      const mockToken = 'mockAccessToken';
      jest
        .spyOn(usersService, 'getByUserName')
        .mockResolvedValueOnce(mockUser());
      (compareHash as jest.Mock).mockReturnValueOnce(true);
      jest.spyOn(jwtService, 'signAsync').mockResolvedValueOnce(mockToken);

      const result = await authenticationService.login(
        'existingUser',
        'correctPassword',
      );

      expect(result).toEqual({ accessToken: `Bearer ${mockToken}` });
    });
  });
});
