import { Connection, Keypair, Transaction, TransactionInstruction, sendAndConfirmTransaction } from "@solana/web3.js";

function createKeypairFromFile(path: string): Keypair {
    return Keypair.fromSecretKey(
        Buffer.from(JSON.parse(require('fs').readFileSync(path, "utf-8")))
    )
};

describe("hello-solana", () => {
    const connection = new Connection(`http://127.0.0.1:8899`, 'confirmed');
    const payer = createKeypairFromFile(require('os').homedir() + '/.config/solana/id.json');
    const program = createKeypairFromFile('/Users/hoooooou_jun/prac_sol/rpc/target/deploy/prac_sol-keypair.json');

    it("Say hello!", async () => {
        let ix = new TransactionInstruction({
            keys: [
                {
                    pubkey: payer.publicKey,
                    isSigner: true,
                    isWritable: true
                }
            ],
            programId: program.publicKey,
            data: Buffer.alloc(0), // No data
        });
        await sendAndConfirmTransaction(
            connection,
            new Transaction().add(ix), // Add our instruction (you can add more than one)
            [payer]
        );
    });
});
