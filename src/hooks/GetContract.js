import { useContract, useSigner } from 'wagmi'
import Idenabi from '../contracts/artifacts/contracts/Identity.sol/Identity.json';

function GetContract(addr,abi) {
 const { data: signer, isError, isLoading } = useSigner()

 const contract = useContract({
 address: '0x157ae817FCAd5a0d07E0Cc4BDcAC6dd525a1bef1',
 abi: Idenabi.abi,
 signerOrProvider: signer,
 })

 return contract;

}

export default GetContract