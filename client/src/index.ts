import { Connection, Keypair, Transaction } from "@solana/web3.js";

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

const wallet = Keypair.generate();

console.log("hello world!");
