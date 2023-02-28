export class FungibleTokenError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'FungibleTokenError';
  }
}
