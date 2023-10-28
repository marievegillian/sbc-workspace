/*****
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
****/

use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};
entrypoint!(process_instruction);

fn process_instruction( //3 parameters of solana instructions
    program_id: &Pubkey,        //program id
    accounts: &[AccountInfo],   //
    instruction_data: &[u8]     //array of bytes
) -> ProgramResult {
        msg!("{},{},{:?}" , program_id, accounts.len(), instruction_data);
        Ok(())
}

// to build: cargo-build-sbf