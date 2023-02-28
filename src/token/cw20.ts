import { BlockchainClient } from '@blockchain/chain-bridge';
import { FungibleToken, TokenInfo } from '../type';

export class Cw20 implements FungibleToken {
  private xpla: BlockchainClient;

  constructor(blockchainClient: BlockchainClient) {
    this.xpla = blockchainClient;
  }

  async approve(
    contractAddress: string,
    spender: string,
    amount: number,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async getAllowance(
    contractAddress: string,
    owner: string,
    spender: string,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async getBalance(contractAddress: string, address: string): Promise<any> {
    const result = await this.xpla.client.contractQuery(contractAddress, {
      balance: { address: address },
    });
    return result;
  }

  async getTokenInfo(contractAddress: string): Promise<TokenInfo> {
    return <TokenInfo>{};
  }

  async transfer(
    contractAddress: string,
    to: string,
    amount: number,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }

  async transferFrom(
    contractAddress: string,
    from: string,
    to: string,
    amount: number,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }
}
