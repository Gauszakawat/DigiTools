import React, { useState } from 'react';
import Products from './Products';
import Card from './card';

const Tols = ({fetchproducts,countiteam, setcountiteam, addedproducts, setaddedproducts}) => {
    const [btnaction, setbtnaction] = useState('bg');
    return (
        <div className='w-11/12 mx-auto py-[50px]'>
            <div className="text text-center mb-2">
                <h2 className='text-[48px] font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center py-1 gap-0 border-1 my-2 rounded-full border-gray-200 mx-auto w-[160px]'>
                    <button onClick={()=>setbtnaction('bg')} className={` btn  rounded-l-full ${btnaction === 'bg' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white'} `}>Products</button>
                    <button onClick={()=>setbtnaction('false')} className={`btn rounded-r-full ${btnaction === 'false' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white'} : `}>Cart {(countiteam)} </button>
                </div>
                <div className='mt-5'>
                 {
                    btnaction == 'bg' ? <Products fetchproducts={fetchproducts} countiteam={countiteam} setcountiteam={setcountiteam} addedproducts={addedproducts} setaddedproducts={setaddedproducts}></Products>
                    : 
                     <Card fetchproducts={fetchproducts} setaddedproducts={setaddedproducts} addedproducts={addedproducts} > </Card> 
                 }

                </div>
            </div>
            
        </div>
    );
};

export default Tols;