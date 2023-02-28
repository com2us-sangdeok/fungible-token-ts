import { BlockchainClient } from '@blockchain/chain-bridge';
import {ICappedFungibleToken, TokenInfo} from "../type";

export class Erc20Capped implements ICappedFungibleToken {
  private polygon: BlockchainClient;

  constructor(blockchainClient: BlockchainClient) {
    this.polygon = blockchainClient;
  }

  async approve(contractAddress: string, spender: string, amount: number): Promise<any> {
    return Promise.resolve(undefined);
  }

  async getAllowance(contractAddress: string, owner: string, spender: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  async getBalance(contractAddress: string, address: string): Promise<number> {
    this.polygon.client.getBalance(address);
    return Promise.resolve(0);
  }

  async getTokenInfo(contractAddress: string): Promise<TokenInfo> {
    return <TokenInfo>{};
  }

  async transfer(contractAddress: string, to: string, amount: number): Promise<any> {
    return Promise.resolve(undefined);
  }

  async transferFrom(contractAddress: string, from: string, to: string, amount: number): Promise<any> {
    return Promise.resolve(undefined);
  }

  async cap(contractAddress: string): Promise<number> {
    return Promise.resolve(0);
  }

  async mint(contractAddress: string, to: string, amount: number): Promise<any> {
    return Promise.resolve(undefined);
  }
}
