// All supported networks and related contract addresses are defined here.
//
// LINK token addresses: https://docs.chain.link/resources/link-token-contracts/
// Price feeds addresses: https://docs.chain.link/data-feeds/price-feeds/addresses
// Chain IDs: https://chainlist.org/?testnets=true

require("@chainlink/env-enc").config()

const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2

const npmCommand = process.env.npm_lifecycle_event
const isTestEnvironment = npmCommand == "test" || npmCommand == "test:unit"

// Set EVM private key (required)
const PRIVATE_KEY = process.env.PRIVATE_KEY
if (!isTestEnvironment && !PRIVATE_KEY) {
  throw Error("Set the PRIVATE_KEY environment variable with your EVM wallet private key")
}

const networks = {
  ethereumSepolia: {
    url: process.env.ETHEREUM_SEPOLIA_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.ETHERSCAN_API_KEY || "UNSET",
    chainId: 11155111,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "ETH",
    linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    linkPriceFeed: "0x42585eD362B3f1BCa95c640FdFf35Ef899212734",
    functionsRouter: "0xb83E47C2bC239B3bf370bc41e1459A34b41238D0",
    functionsDonId: "fun-ethereum-sepolia-1",
  },
  polygonMumbai: {
    url: process.env.POLYGON_MUMBAI_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.POLYGONSCAN_API_KEY || "UNSET",
    chainId: 80001,
    confirmations: DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "MATIC",
    linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    linkPriceFeed: "0x12162c3E810393dEC01362aBf156D7ecf6159528", // LINK/MATIC
    functionsRouter: "0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C",
    functionsDonId: "fun-polygon-mumbai-1",
  },
  avalancheFuji: {
    url: process.env.AVALANCHE_FUJI_RPC_URL || "UNSET",
    gasPrice: undefined,
    accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    verifyApiKey: process.env.SNOWTRACE_API_KEY || "UNSET",
    chainId: 43113,
    confirmations: 2 * DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS,
    nativeCurrencySymbol: "AVAX",
    linkToken: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
    linkPriceFeed: "0x79c91fd4F8b3DaBEe17d286EB11cEE4D83521775", // LINK/AVAX
    functionsRouter: "0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0",
    functionsDonId: "fun-avalanche-fuji-1",
  },
}

module.exports = {
  networks,
}
