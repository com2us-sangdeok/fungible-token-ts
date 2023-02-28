import { BlockchainClient } from '@blockchain/chain-bridge';
import { Cw20, /*Cw20Capped,*/ Erc20 /*Erc20Capped*/ } from './token';
import { MissingTokenTypeError } from './error';

export enum TokenType {
  CW20 = 'cw20',
  // CW20_CAPPED = 'cw20-capped',
  ERC20 = 'erc20',
  // ERC20_CAPPED = 'erc20-capped',
}

export class TokenFactory {
  public static create(tokenType: TokenType, bc: BlockchainClient): any {
    switch (tokenType) {
      case TokenType.CW20:
        return new Cw20(bc);
      // case TokenType.CW20_CAPPED:
      //   return new Cw20Capped(bc);
      case TokenType.ERC20:
        return new Erc20(bc);
      // case TokenType.ERC20_CAPPED:
      //   return new Erc20Capped(bc);
      default:
        throw new MissingTokenTypeError(tokenType, [
          TokenType.CW20,
          // TokenType.CW20_CAPPED,
          TokenType.ERC20,
          // TokenType.ERC20_CAPPED,
        ]);
    }
  }
}
