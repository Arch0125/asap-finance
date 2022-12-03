import React, { useState } from 'react';
import { Web3Storage } from 'web3.storage';

const Uploader = () => {
    const storage = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJCZWI3QmI3MTY2NjBkOEQ2NzA5Njg5OEQ2MDExODU4RUNCOTdjM2YiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwODQ4OTQ2MjQsIm5hbWUiOiJldGhpbmRpYSJ9.AuSqvNirmuuy8--bYy-nTsNlZfndT2OWlmCRGOX6Kgc' });
    const[file,setFile]=useState(null);
    const setfile = async () => {
        const cid = await storage.put([file]);
        console.log(cid);
    }
    console.log(file)
    return ( 
        <div className='flex flex-col border-2 border-black h-fit w-full justify-between mt-14'>
            <div className='flex flex-col justify-between items-center bg-filler w-full '>
                <p className='text-xl text-bgwhite p-2 font-bold'>Encrypted decentralized storage</p>
            </div>
            <div className='flex flex-col justify-between items-center w-full h-fit'>
            <input type='file' onChange={(e)=>setFile(e.target.files[0])} />
            <button onClick={()=>setfile()}>Upload</button>
            </div>
        </div>
     );
}
 
export default Uploader;