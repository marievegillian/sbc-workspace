import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('A7r2kxCHqtQKcJHz3i4Y6e144rhYjkFjf8FveipjW4wf');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);


}

main()