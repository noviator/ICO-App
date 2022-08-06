const {ethers} = require("hardhat");
require("dotenv").config();
const {MY_NFT_CONTRACT_ADDRESS} = require("../constants/index");

async function main(){
  // MyToken - name of the contract to deploy
  const myTokenContract = await ethers.getContractFactory("MyToken");

  const deployedMyTokenContract  = await myTokenContract.deploy(MY_NFT_CONTRACT_ADDRESS);

  console.log(`MyToken Contract Address : ${deployedMyTokenContract.address}`)

}

main()
  .then(()=>process.exit(0))
  .catch((err)=>{
    console.error(err);
    process.exit(1);
  })