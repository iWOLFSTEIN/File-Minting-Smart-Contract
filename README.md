# File-Minting-Smart-Contract

## This contract accepts sha256 hash code of any file and mints it against your wallet address

- To interact with contract using interact.js file in /scripts/ use the following steps
- 
- 
- Use your own Metamask wallet's private key, alchemy's rpc url (known as http url) and api key (select rinkeyby in alchemy and copy these urls)
- 
- 
- The contract is on rinkeby testnet and its address is
- 0x5C27924B70F2Ae1252a5524feb1C81e2AC607C60
- 
- 
- First create a file with name '.env' in the root directory and place contract address, private key, rpc url and api key as shown (avoid punctuations):
- CONTRACT = 0x5C27924B70F2Ae1252a5524feb1C81e2AC607C60
- PRIVATE_KEY = your private key here
- API_URL_KEY = alchemy rpc url here
- API_KEY = alchemy api key here
-
- 
- Try to use same variable name of as shown above to avoid syntax errors
- 
- 
- Use your own any unique sha256 hash code in interact.js file to test the functionality of the contract (the existing sha256 code in interact.js has already been used)
-
-
- Also check the implementation of this smart contract in flutter app in the following repo
- https://github.com/iWOLFSTEIN/File-Minting-Blockchain-App-Flutter
- 
- 
- Give your feedback and suggestion to improve this app
