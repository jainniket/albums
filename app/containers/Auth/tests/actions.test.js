import {
  EMAIL_CHANGED,
} from '../constants';

import {
  emailChanged,
} from '../actions';

describe('Auth Actions', () => {
  describe('emailChanged', () => {
    it('should return the correct type', () => {
      const fixture = 'abcd@gmail.com';
      const expectedResult = {
        type: EMAIL_CHANGED,
        payload: fixture,
      };
      expect(emailChanged(fixture)).toEqual(expectedResult);
    });
  });
});
