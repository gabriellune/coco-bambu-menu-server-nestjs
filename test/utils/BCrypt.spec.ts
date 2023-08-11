import * as bcrypt from 'bcrypt';
import { hashPassword, compareHash } from '../../src/utils/BCrypt';

jest.mock('bcrypt', () => ({
  genSaltSync: jest.fn(() => 'mocked-salt'),
  hashSync: jest.fn(() => 'mocked-hash'),
  compareSync: jest.fn(() => true),
}));

describe('bcryptUtils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('hashPassword', () => {
    it('should hash the password using bcrypt', () => {
      const password = 'testPassword';
      const hashedPassword = hashPassword(password);

      expect(bcrypt.genSaltSync).toHaveBeenCalledWith(12);
      expect(bcrypt.hashSync).toHaveBeenCalledWith(password, 'mocked-salt');
      expect(hashedPassword).toBe('mocked-hash');
    });
  });

  describe('compareHash', () => {
    it('should compare the password with the hash using bcrypt', () => {
      const password = 'testPassword';
      const hashedPassword = 'mocked-hash';
      const result = compareHash(password, hashedPassword);

      expect(bcrypt.compareSync).toHaveBeenCalledWith(password, hashedPassword);
      expect(result).toBe(true);
    });
  });
});
