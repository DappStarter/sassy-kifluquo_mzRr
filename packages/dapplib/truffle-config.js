require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stove regret often modify imitate problem slot gate'; 
let testAccounts = [
"0xd7c20b79c6e24cea5e5445803af68463231fbdd78f5fcea9ea5e040ccf3f09b7",
"0xee343c6d4b68458abfdd33cf4f341d327326640e959013a120f8684cdcf02fff",
"0x60127b8742966aa5dc60dc0e27e00ebc1e27c2c6b94ecec55297d9fa96783d13",
"0xb0b4b917f047dee012eefb9c1007aa6885508bd30e51e78580b6e7312627a9b5",
"0xb1e32079345281de45ab879c5cba4cb198196e537321f57e890c0b07caeb5ebf",
"0x97dfe022b0400f5b20515a6df038da77ea7beb7f39b01fa60de3b79240687d07",
"0x3bf29bf912e0adf3dac1f00ac06f97137008f9bc8905302a67590f8b4f8f8c6f",
"0xc28a566bd59186c53332e0c02044364fa5f304bc2893f9706240e7c1bfb40e4d",
"0x778da81b866d5c6dbe6a51b49410a451a5c57043f0220a219d9ab922afb65716",
"0xab7b0b9ca00730762d9e40524eccf1e466669188833b6275b8779edc7bce84ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


