import {
  BlockchainClient,
  BlockchainClientOptions,
} from '@blockchain/chain-bridge';
import {TokenFactory, TokenType} from "../../src/token-factory";
import {FungibleToken} from "../../src";
// import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
// import {SigningStargateClient} from "@cosmjs/stargate";

const options: BlockchainClientOptions = {
  type: 'xpla',
  nodeURL: 'https://cube-lcd.xpla.dev',
  chainID: 'cube_47-5',
  // isClassic: true
};
const xpla = new BlockchainClient(options);
const cw20: FungibleToken = TokenFactory.create(TokenType.CW20, xpla);
// const cw20Capped: ICappedFungibleToken = TokenFactory.create(TokenType.CW20_CAPPED, xpla);

const cw20Contract = 'xpla1hkcp8avzchehvt5y8373ac0xyqklz6yalyz2q2t28k0qpvpkeyzsvgqf6s';

describe('Connection', () => {
  describe('wallet test', function () {
    it('cw20 balance', async function () {
      const balance = await cw20.getBalance(
          cw20Contract,'xpla16v6y48xllwy7amcmvhkv0a3zp7jepl44yvhvxt',
      );
      console.log('cw20 balance: ', balance);
    });

    it('wallet', async function () {
      // const mnemonic = "surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put";
      // const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
      //
      // // const [firstAccount] = await wallet.getAccounts();
      //
      // const rpcEndpoint = "https://cube-lcd.xpla.dev";
      // const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

      // client.getBalance('xpla16v6y48xllwy7amcmvhkv0a3zp7jepl44yvhvxt', 'axpla')

      const config = {
        chainId: "cube_47-5",
        rpcEndpoint: "https://cube-lcd.xpla.dev",
        prefix: "wasm",
      };


      // console.log('cw20 wallet: ', await client.getChainId());
    });


  });

});
