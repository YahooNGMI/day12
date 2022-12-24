
const ethers = require('ethers');
const provider = new ethers.providers.Web3Provider(window.ethereum);

document.getElementById("addressbutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {
        console.log(addresses[0]);
        document.getElementById("address").innerHTML = addresses[0];
    })

})

document.getElementById("balancebutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {

        provider.getBalance(addresses[0]).then(myBalance => {
            console.log(ethers.utils.formatEther(myBalance));
            document.getElementById("balance").innerHTML = ethers.utils.formatEther(myBalance);
        })
    })
})

document.getElementById("blocknumberbutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {

        provider.getBlockNumber(addresses[0]).then(myBlockNumber => {
            console.log(myBlockNumber);
            document.getElementById("blockNumber").innerHTML = myBlockNumber;
        })
    })
})

//     })
const signer = provider.getSigner();
//     console.log(signer);
//     // Send 1 ether to an ens name.
//     // const tx = signer.sendTransaction({
//     // to: "0x6c5D6081e7EdD0F047d4b72BBAdf7Ebf8168b31B",
//     // value: ethers.utils.parseEther("0.00000001")
//     // filter = {
//     //     address: 0x9552cfce60429863D4A7D8205457EC4AC05857dC,
//     //     topics: [
//     //         utils.id("Transfer(address,address,uint256)"),
//     //         hexZeroPad(myAddress, 32)
//     //     ]
//     // };




document.getElementById("gaspricebutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {

        signer.getGasPrice(addresses[0]).then(GasPrice => {
            console.log(ethers.utils.formatUnits(GasPrice, "gwei"));
            document.getElementById("currentGasPrice").innerHTML = ethers.utils.formatUnits(GasPrice, "gwei");
        })
    })
})

// document.getElementById("chainIDbutton").addEventListener("click", function () {
//     const chainID = provider.getNetwork();
//     console.log(`Current chain id: ${chainId}`);



//     // signer.getChainId.then(number => {
//     //     this._checkProvider("getChainId");
//     //     const network = this.provider.getNetwork().then
//     //     return network.chainId;

async function findchainid() {
    const { chainId } = await provider.getNetwork();
    document.getElementById("chainIDbutton").addEventListener("click", function () {
        console.log(`Current chain id: ${chainId}`);
        document.getElementById("myChainID").innerHTML = chainId;
        // })
    });
}
findchainid();

// async function main() {
//     // Replace with your Ethereum wallet address
//     const walletAddress = '0x9552cfce60429863D4A7D8205457EC4AC05857dC0';

//     // Connect to the Ethereum network

//     // Get all the NFTs owned by the wallet address
//     const nftTokens = await ethers.getNFTokens(provider, walletAddress);

//     console.log(nftTokens);
// }

// main();


//     // Call the getGasPrice() method
//     const gasPrice = await provider.getGasPrice();
//     document.getElementById("currentGasPrice").innerHTML = ethers.utils.formatUnits(gasPrice, "gwei");
//     console.log(ethers.utils.formatUnits(gasPrice, "gwei")); // logs the current gas price in wei
// }

// getGasPrice();
// });

// });

