import { ValidationError } from '../errors';

export class PasswordValidator {
  validate(value: string): void {
    if (!value) throw new ValidationError('NullPassword');
    if (value.length < 6) throw new ValidationError('PasswordTooShort');
  }
}
