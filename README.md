# OnlyBrands

## Problem Statement

### AI changes the game

With AI on the rise, new technology has the potential to turbocharge the content creation process through generative AI. 

At OnlyBrands, we believe:

- It will be impossible to differentiate between creator produced content and AI generated replicas.
- It will be impossible to stop/deter people from using generative AI technology to create content.

OnlyBrands protects creators from the unauthorized use of their likeness in AI generated content.
With an NFT minted by OnlyBrands' ERC-721 smart contract, it is possible to verify the authenticity of AI generated content.

### Creators need help getting noticed by brands

But that said, 60% of 13-20-year-olds tell us they are interested in promoting brands on their social media, and we found that the majority of all young consumers (not just creators) are eager for brands to reach out to them directly or to have their content used by a brand.

The problem is not all content creators know how to get their content noticed. With OnlyBrands, creators can sign up to have a better chance of signing brand partnerships.

[Source](https://www.ypulse.com/article/2022/02/17/the-majority-of-gen-z-millennials-are-nano-creators-theyre-eager-to-work-with-brands/)

---

## Solution Overview

OnlyBrands business model complements the evolution of AI generated content technology.
At OnlyBrands, we celebrate the use of AI generated content. We believe AI generated content can turbo-charge the creator economy.
By capturing creators' likeness in the form of an NFT, creators can authenticate the use of their likeness in projects involving generative AI.

Creators are also able to work on numerous projects worldwide simulatenously, while maintaining the integrity of the project with OnlyBrands.
By providing their approval in the form of an NFT, creators have more control over the use of their likeness in AI generated content.

### How It Works

Brands pitch AI generated campaigns to the creator in the form of a file i.e. an image.
Creators can preview proposed campaigns and approve/disapprove the use of their likeness in these campaigns.
If approved, the creator can mint and issue an NFT to the brand as authorizion for the brand to proceed with marketing campaign.

### Brand Proposals to Creators
Brands submit files to Creators using OnlyBrands. Creators can preview proposed marketing campaigns and approve/disapprove the request.
If approved, the file is pinned to a database (IPFS) using Pinata API, which will return a unique content identifier (CID).

### What is a Content Identifier (CID)?
A content identifier is a pointer to a piece of content in IPFS.
In IPFS, data is stored on a decentralized network of IPFS nodes, where files are pointed to based on the content of the file.

If two files, consisting of the same content, are uploaded to different IPFS nodes, they will still have the same CID.
Any slight difference in the content, will yield a new CID.

### Minting Creator's NFT
With a CID, creators are able to mint new NFT'S with the click of a button. The CID and the user's crypto wallet address are passed to the OnlyBrands' ERC-721 smart contract
using Web3 javascript library to connect front-end (made with React.js) with Ethereum.

## Tech Stack

OnlyBrands uses the following technologies:

[IPFS](https://docs.ipfs.tech/concepts/what-is-ipfs/#defining-ipfs)
- A decentralized network of nodes used to store and transfer the content of files.

[Pinata](https://docs.pinata.cloud/what-can-i-learn-here/what-is-pinata)
- Pinata is a service that allows developers to easily pin files on the IPFS network.

[Web3.js](https://web3js.readthedocs.io/en/v1.8.2/getting-started.html)
- A Javascript library that provides an interface for interacting with the Ethereum blockchain. With Web3.js, developers can interact with the blockchain and perform various tasks, such as sending transactions, querying blockchain data, and deploying smart contracts. 

[ERC-721](https://eips.ethereum.org/EIPS/eip-721)
- A standard interface for non-fungible tokens, which allows the use of an API (provided by Web3.js) for NFT's within smart contracts.

[React.js](https://react.dev/)
- A Javascript library for building front end user interfaces.

---
## Dependencies

The project's dependencies are stored in `package.json`. To install these dependencies, you can execute the following command:

All of the dependencies are listed below:

```
"@microsoft/signalr": "^7.0.4",
"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^13.0.0",
"@testing-library/user-event": "^13.2.1",
"axios": "^1.3.4",
"bootstrap": "^5.2.3",
"date-fns": "^2.29.3",
"form-data": "^4.0.0",
"formik": "^2.2.9",
"fs": "^0.0.1-security",
"mdi": "^2.2.43",
"prop-types": "^15.8.1",
"react": "^18.2.0",
"react-bootstrap": "^2.7.2",
"react-dom": "^18.2.0",
"react-dropzone": "^14.2.3",
"react-icons": "^4.8.0",
"react-redux": "^8.0.5",
"react-router-dom": "^6.9.0",
"react-scripts": "5.0.1",
"recharts": "^2.5.0",
"simplebar-react": "^3.2.1",
"toastr": "^2.1.4",
"web-vitals": "^2.1.0",
"web3": "^1.8.2"
```
---
## Contributors

This application was authored by:

- Chris Doupis (https://github.com/starfiresd)
- Eugene Kim (https://github.com/eugeneworld)
- Jacqueline Taylor (https://github.com/JacqTaylor)
- Kevin Chang (https://github.com/kevinchang9000)
- Patrick Snyder (https://github.com/Psnyder204)
- Ryan Mangum (https://github.com/rrmangum)
- Tina Guo (https://github.com/tinag1718)

---
## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

























