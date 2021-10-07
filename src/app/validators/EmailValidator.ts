import isEmail from 'validator/lib/isEmail';
import { ValidationError } from '../errors';

export class EmailValidator {
  validate(value: string): void {
    if (!isEmail(value)) throw new ValidationError('WrongEmailFormat');
  }
}
