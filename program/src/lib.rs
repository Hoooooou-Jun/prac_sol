use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};

// declare & export entrypoint
entrypoint!(process_instruction);

// entrypoint's implementation
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    // log to On-chaine
    msg!("Hello Chain");
    msg!("Program ID at moment: {}", &program_id);

    // exit program
    Ok(())
}
