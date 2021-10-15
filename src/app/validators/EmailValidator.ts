import isEmail from 'validator/lib/isEmail';
import { ValidationError } from '../errors';

export class EmailValidator {
  validate(value: string) {
    if (!value) throw new ValidationError('NullEmail');
    if (!isEmail(value)) throw new ValidationError('WrongEmailFormat');
  }
}
