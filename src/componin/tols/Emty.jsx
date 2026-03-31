import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';


const Emty = () => {
    return (
         <div>
                 <div className=' text-center items-center justify-center py-10'>
                        <div className='flex justify-center items-center'><MdAddShoppingCart size={50} className=' opacity-60 '></MdAddShoppingCart></div>
                        <h1 className='text-[48px] opacity-60'>Your cart is empty</h1>
                          
                     </div>
                     
                        
                     
   

        </div>
    );
};

export default Emty;