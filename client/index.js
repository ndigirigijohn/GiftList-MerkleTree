const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

const yourName = 'Mrs. Shelia Welch';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList);

  const index = niceList.indexOf(yourName);


  const proof = merkleTree.getProof(index);

  const root = merkleTree.getRoot();



  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    /*Server expecting: proof, leaf, root*/
    proof,
    leaf: yourName,
    root,
    
  
  });

  console.log({ gift });
}

main();