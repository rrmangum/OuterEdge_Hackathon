import Web3 from "web3";
import creatorApprovalBuild from '../../contracts/creatorApprovalABI';

let selectedAccount;
let contract;

export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== "undefined") {
      provider
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
            selectedAccount = accounts[0];
          console.log(accounts);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const web3 = new Web3(provider);
    
    const networkId = await web3.eth.net.getId();
    
    contract = new web3.eth.Contract(creatorApprovalBuild, creatorApprovalBuild.networks[networkId].address);   
};

export const mintToken = () => {
    contract.methods.issueNFT()
};


