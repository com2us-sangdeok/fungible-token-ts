export class MissingTokenTypeError extends Error {
  constructor(tokenType: string, availableTokenTypes: string[] = []) {
    super(
      `wrong token type: '${tokenType}' given. Supported token type are: ${availableTokenTypes
        .map((d) => `"${d}"`)
        .join(', ')}.`,
    );
    this.name = 'MissingTokenTypeError';
  }
}
