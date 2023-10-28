import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2p2NXAJbrctwW1DNS7q46rJoRWTpCw8bSKkiQq4HZzWC2gg5tUHKaP9o53pU1jLfFTzmvEt7Rnw17cHn1FC5qcER')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('A7r2kxCHqtQKcJHz3i4Y6e144rhYjkFjf8FveipjW4wf');
    const publicKeyTo = new Web3.PublicKey('BpD19DD33Wxg721hNk4yueCn5ruP4MK3jKrk5kPw3W6h');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();