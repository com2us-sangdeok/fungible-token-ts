export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
}

export interface FungibleToken {
  getBalance(contractAddress: string, address: string): Promise<any>;

  getTokenInfo(contractAddress: string): Promise<TokenInfo>;

  getAllowance(
    contractAddress: string,
    owner: string,
    spender: string,
  ): Promise<any>;

  transfer(contractAddress: string, to: string, amount: number): Promise<any>;

  transferFrom(
    contractAddress: string,
    from: string,
    to: string,
    amount: number,
  ): Promise<any>;

  approve(
    contractAddress: string,
    spender: string,
    amount: number,
  ): Promise<any>;
}

export interface ICappedFungibleToken extends FungibleToken {
  cap(contractAddress: string): Promise<number>;

  mint(contractAddress: string, to: string, amount: number): Promise<any>;
}
