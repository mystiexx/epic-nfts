const main = async () => {
    const nftContractfactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractfactory.deploy();
    await nftContract.deployed();

    console.log("Contract was deployed to: ", nftContract.address)

    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
  
    
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1)
    }
}

runMain();