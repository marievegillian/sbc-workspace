
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("A7r2kxCHqtQKcJHz3i4Y6e144rhYjkFjf8FveipjW4wf")
const decoded = base58.decode('2p2NXAJbrctwW1DNS7q46rJoRWTpCw8bSKkiQq4HZzWC2gg5tUHKaP9o53pU1jLfFTzmvEt7Rnw17cHn1FC5qcER')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();