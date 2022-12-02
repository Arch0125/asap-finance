import { useContract, useSigner } from 'wagmi'
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

function GetContract(addr,abi) {
 const { data: signer, isError, isLoading } = useSigner()

 const contract = useContract({
 address: '0x3922Ee5f7D47285Fe575DD8073FaeCed6A87f326',
 abi: Idenabi.abi,
 signerOrProvider: signer,
 })

 return contract;

}

export default GetContract