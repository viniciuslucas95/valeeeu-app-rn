import { ValidationError } from '../../../errors';
import { EmailValidator, PasswordValidator } from '../../../validators';

export class CredentialsValidator {
  private readonly emailValidator = new EmailValidator();
  private readonly passwordValidator = new PasswordValidator();

  validate(email: string, password: string) {
    if (!email) throw new ValidationError('NullEmail');
    this.emailValidator.validate(email);
    if (!password) throw new ValidationError('NullPassword');
    this.passwordValidator.validate(password);
  }
}
