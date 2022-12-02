import { useContract, useSigner } from 'wagmi'
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

function GetContract(addr,abi) {
 const { data: signer, isError, isLoading } = useSigner()

 const contract = useContract({
 address: '0x94F63346D2173e341F5804d9d281b1263b51028f',
 abi: Idenabi.abi,
 signerOrProvider: signer,
 })

 return contract;

}

export default GetContract