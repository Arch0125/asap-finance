import { useContract, useSigner } from 'wagmi'
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

function GetContract(addr,abi) {
 const { data: signer, isError, isLoading } = useSigner()

 const contract = useContract({
 address: '0xF88FCdef5A9662087d6b596766f9dcD890C94B29',
 abi: Idenabi.abi,
 signerOrProvider: signer,
 })

 return contract;

}

export default GetContract