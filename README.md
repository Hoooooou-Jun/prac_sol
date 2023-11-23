# SOL
## Solana CLI set-up
### solana cli test validator
~~~
solana-test-validator
~~~

### set up config for solana by localhost
~~~
solana config set --url localhost
~~~

### get solana config(local)
~~~
solana config get
~~~

### create SOL wallet
| if you already have wallet saved at default location, this command will not override(if you insert '--force' at command, it will be overided.)
~~~
solana-keygen new
~~~

### set new wallet as default
~~~
solana config set -k ~/.config/solana/id.json
~~~

### airdrop SOL tokens to wallet
~~~
solana airdrop 2
~~~

### check SOL by wallet
~~~
solana balance
~~~

## Solana by Rust
1. install rust & cargo
2. run your Solana localhost validator

### create new rust library with cargo
~~~
cargo init hello_world --lib
~~~
install rust library
~~~
cargo add solana program
~~~

### solana cargo build
~~~
cargo build-bpf
~~~

### deploy to solana
~~~
solana program deploy ./target/deploy/hello_world.so
~~~
