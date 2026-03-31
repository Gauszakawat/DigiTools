import React from 'react';

const Addedproductslist = ({adedProduc}) => {
    return (
        <div className='  w-full  text-start space-y-4  '>
                    <div className="carditeam bg-[#F9FAFC] p-3 rounded-2xl py-3 flex justify-between items-center px-2">

                     <div className="left flex gap-5">
                        <img className='w-[50px] bg-white p-1 rounded-full' src={adedProduc.img} alt="" />
                        <div className=' items-center gap-1.5 '>
                            <h2 className='font-semibold text-1xl'>{adedProduc.name}</h2>
                            <p>${adedProduc.price}</p>
                        </div>
                     </div>

                     <div className="right">
                         <p onClick={()=> removefuntion(adedProduc)} className=' text-[#FF3980]'>Remove</p>
                     </div>
                  </div>
                  <div className="Total flex justify-between ">
                    <h4>Total:</h4>
                    <h1 className='font-bold'>$78</h1>
                  </div>
                  <button className='w-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-2'>Proceed to Checkout</button>
                      </div>
    );
};

export default Addedproductslist;




{/* {
                       (addedproducts.length === 0) &&(

                         <div className=' text-center items-center justify-center py-10'>
                        <div className='flex justify-center items-center'><MdAddShoppingCart size={50} className=' opacity-60 '></MdAddShoppingCart></div>
                        <h1 className='text-[48px] opacity-60'>Your cart is empty</h1>
                          
                     </div>)
                     
                        
                     } */}