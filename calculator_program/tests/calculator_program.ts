import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { CalculatorProgram } from "../target/types/calculator_program";
import { assert } from "chai";

describe("calculator_program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.getProvider();
  const program = anchor.workspace.CalculatorProgram as Program<CalculatorProgram>;
  const keyPair = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    // Testing Code
    await program.methods.initialize().accounts({
      calculator: keyPair.publicKey,
      signer: provider.publicKey,
      systemProgram: anchor.web3.SystemProgram.programId,
    }).signers([keyPair]).rpc();

    const calculatorAccount = await program.account.calculator.fetch(keyPair.publicKey);
    assert.ok(Number(calculatorAccount.result) == 0);
  });

});
