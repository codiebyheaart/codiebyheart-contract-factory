# CodieByHeart — Contract Factory (Hardhat)
A small example project that demonstrates **contract creation** on Ethereum using Solidity and Hardhat.
This project includes:
- `CodieContract.sol` — a simple contract that stores a name and owner.
- `CodieFactory.sol` — factory contract that deploys new `CodieContract` instances.
- Hardhat scripts and tests (Mocha/Chai + ethers).
- MIT License.

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Compile:
   ```bash
   npx hardhat compile
   ```
3. Run tests (uses Hardhat Network):
   ```bash
   npx hardhat test
   ```
4. Deploy to a live network (configure `NETWORK` in `hardhat.config.js` and set private key in env):
   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

## Project structure
- `contracts/` — Solidity contracts
- `scripts/` — deployment scripts
- `test/` — test suite (Mocha/Chai + ethers)
- `hardhat.config.js` — Hardhat config
