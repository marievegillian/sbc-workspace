use anchor_lang::prelude::*;

declare_id!("6PxW4uaB66n6WavKxacEPTrzPKEprX6MYbwZHQJXGQqp");

#[program]
pub mod new_project {
    use super::*;
//3 initialize fn update
    // pub fn initialize(ctx: Context<Initialize>) -> Result<()> {//interface
    pub fn initialize(
        ctx: Context<Initialize>,//metadata, what the fn needs to know fo it to proceed
        first_name: String,
        last_name: String,
    ) -> Result<()> {//interface
        let customer: &mut Account<'_, Customer> = &mut ctx.accounts.customer;
        customer.first_name = first_name;
        customer.last_name = last_name;
        Ok(())
    }
}
/**
1 create pda
2 create account
3 update the initialize function
pub fn initialization(ctx: Cont)

1. Create PDA (responsible for creating accounts)
program derived accounts
generics


2. Create account (think tables in mysql)
3. Updating the initialize function 
pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
    Ok(())
}
4. test anchor program
5
. deploy anchor program to devnet

**/

//1. create pda
#[derive(Accounts)]
pub struct Initialize <'info> {
    //3 fields: 1 account, 2 payer/signer - accounts na mubayad sa transaction, 3 system program like a boiler plate
    #[account(init, payer=signer, space=264)]
    pub customer: Account<'info, Customer>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

//2. create account
#[account]
pub struct Customer {
    pub first_name: String,
    pub last_name: String,
}
//3 updating initialize fn