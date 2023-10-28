import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('2p2NXAJbrctwW1DNS7q46rJoRWTpCw8bSKkiQq4HZzWC2gg5tUHKaP9o53pU1jLfFTzmvEt7Rnw17cHn1FC5qcER');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('AwHQqDx3zr58yKSjAh9f9RiVcojUKhx4X3tPmcyoJLYY'), //mint 
        new Web3.PublicKey('6Nm97muQDXgMqBvwXhFXYnCyNTZ5oaZXpS5314LbDBbH'), //owner
        new Web3.PublicKey('A7r2kxCHqtQKcJHz3i4Y6e144rhYjkFjf8FveipjW4wf'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()