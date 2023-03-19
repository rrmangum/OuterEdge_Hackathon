import Web3 from "web3";
import creatorApprovalBuild from "../contracts/creatorApprovalABI";

var selectedAccount;
let contract;
let isInitialized = false;

export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
      })
      .catch((err) => {
        console.log(err);
        // return;
      });
  }
  const web3 = new Web3(provider);

  contract = new web3.eth.Contract(
    creatorApprovalBuild,
    "0x0a889a824c7E8D845Ac18f4b867d7c21409BF2a8"
  );
  isInitialized = true;
};

export const mintToken = async (address, url) => {
  if(isInitialized) {
    await init();
  }

  return contract.methods
    .issueNFT(address, url)
    .send({ from: selectedAccount });
};
