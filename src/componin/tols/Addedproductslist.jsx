import React from 'react';
import Addedforproducts from './addedforproducts';

const Addedproductslist = ({setaddedproducts , addedproducts, countiteam, setcountiteam, totalP, settotalP}) => {

    const removefuntion = (adedProduc)=>{
      
      const filterlist = addedproducts.filter((removeiteam) => removeiteam.name != adedProduc.name,);

    const newno = countiteam - 1;
    const newpriceafterfilter = totalP - adedProduc.price;

      setaddedproducts(filterlist);
      setcountiteam(newno);
      settotalP(newpriceafterfilter);

   }
   
    return (
        <div>
           <div className='  w-full  text-start space-y-4  '>
                    <div className="carditeam  p-3 rounded-2xl py-3   items-center px-2">
                         {
                            addedproducts.map(adedProduc => 
                                <div className="carditeam bg-[#F9FAFC] p-3 rounded-2xl py-3 flex    justify-between items-center px-2">

                     <div className="left flex gap-5">
                        <img className='w-[50px] bg-white p-1 rounded-full' src={adedProduc.img} alt="" />
                        <div className=' items-center gap-1.5 '>
                            <h2 className='font-semibold text-1xl'>{adedProduc.name}</h2>
                            <p>${adedProduc.price}</p>
                        </div>
                     </div>

                     <div className="right">
                         <button onClick={()=> removefuntion(adedProduc)} className='btn btn-dash border-0 text-[#FF3980]'>Remove</button>
                     </div>
                                </div>
                            )
                         }

                         
                    </div>

                  
                  <div className="Total flex justify-between ">
                    <h4>Total:</h4>
                    <h1 className='font-bold'>$ {totalP}</h1>
                  </div>
                  <button className='w-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-2'>Proceed to Checkout</button>
                      </div>
            
        </div>
    );
};

export default Addedproductslist;




