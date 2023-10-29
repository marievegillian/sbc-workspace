import * as Web3 from "@solana/web3.js";
import base58 from "bs58";

async function main() {
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  const decoded = base58.decode("2p2NXAJbrctwW1DNS7q46rJoRWTpCw8bSKkiQq4HZzWC2gg5tUHKaP9o53pU1jLfFTzmvEt7Rnw17cHn1FC5qcER");
  const keyPair = Web3.Keypair.fromSecretKey(decoded);
  const programId = new Web3.PublicKey(
    "5b2tFLThxu1P65tLrTSBf1zhKztdXLQRJ2inz2HYCt6u"
  );
  const publicKey = new Web3.PublicKey(
    "A7r2kxCHqtQKcJHz3i4Y6e144rhYjkFjf8FveipjW4wf"
  );
  const instruction = new Web3.TransactionInstruction({
    keys: [
      {
        pubkey: publicKey,
        isSigner: true,
        isWritable: false,
      },
    ],
    data: Buffer.alloc(20),
    programId,
  });

  const transaction = new Web3.Transaction().add(instruction);

  const signature = await Web3.sendAndConfirmTransaction(
    connection,
    transaction,
    [keyPair]
  );
  console.log("SIGNATURE", signature);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
  });