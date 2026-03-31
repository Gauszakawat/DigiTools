import React from 'react';

const Addedforproducts = ({adedProduc, addedproducts, setaddedproducts}) => {

    const removefuntion = (adedProduc)=>{
      console.log(adedProduc)
      const filter = addedproducts.filter(removeiteam => removeiteam.id != addedproducts.id);
      setaddedproducts(filter);

   }

    return (
        <div className='  w-full  text-start space-y-4 mb-2 '>
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

        </div>
    );
};

export default Addedforproducts;