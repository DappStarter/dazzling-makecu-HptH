require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember promote hidden climb tail gift'; 
let testAccounts = [
"0xa285fd49eda4a895cd54ebd299081aebab3e37402a921d668a6b6a889815977e",
"0xc7947add486b852dad79c5b1c5f12f6087b4bdce974ad00bbe87abfc574c4dd9",
"0x1b1bd15efeb6d067514d11ea83d8acaf7f838e7ae49ef9779278b0b1afebacc3",
"0xa7fe0edab85f4e39060166d3ff5c6e6e33c97e5bc61d00b8a67dffda4c29c0d6",
"0xdc9d729b03d273260ee7bcf13189a5859b3499e783cd409d9ee261d111f04df1",
"0xcb0a6f22c6e9676917238208fa17a7712090a8ae7a54622bf45fafd6348d54ba",
"0x7888ac14e214c6c26babeb65ceec9748757001d9b888fb2f1c5a916b9b058452",
"0x702e91e7748f924c1095f98d7fcb006104e0b032f321b3edd6ee45911a067f52",
"0xe50697f4d4df179dc8e5219047a81cef715db0bb8a18efd930f06e4c586e63a2",
"0x7a4366778461ffe9beaf7379428061e0a332a224210e8547c77f062d9b3b362b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

