import React from 'react';
import Products from './Products';

const Tols = () => {
    return (
        <div className='w-11/12 mx-auto py-[50px]'>
            <div className="text text-center mb-2">
                <h2 className='text-[48px] font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center py-1 gap-0 border-1 my-2 rounded-full border-gray-200 mx-auto w-[160px]'>
                    <button className='btn  rounded-l-full '>Products</button>
                    <button className='btn rounded-r-full'>Cart</button>
                </div>
                <div className='mt-5'>
                 <Products></Products>

                </div>
            </div>
            
        </div>
    );
};

export default Tols;