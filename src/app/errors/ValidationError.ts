export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'ValidationError';
  }
}
