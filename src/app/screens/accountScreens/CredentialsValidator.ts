import { EmailValidator, PasswordValidator } from '../../validators';

export class CredentialsValidator {
  private readonly emailValidator = new EmailValidator();
  private readonly passwordValidator = new PasswordValidator();

  validate(email: string, password: string) {
    this.emailValidator.validate(email);
    this.passwordValidator.validate(password);
  }
}
