// import React from 'react';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCheckmark } from 'react-icons/io5';

const Productslist = ({product, countiteam, setcountiteam, addedproducts, setaddedproducts}) => {
 const [added, setadded] = useState(false)
    const buynowbtnfuntion = ()=>{
        setadded(true)
        const newcount = countiteam + 1;
        setcountiteam(newcount)
        alert(`${product.name} is Added Your Cart`)

        setaddedproducts([...addedproducts, product])
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm text-start">
               <div className="card-body w-full">
                {/* beg section */}
                 <div className='  text-end '><span className="badge badge-xs py-3 bg-[#FEF3C6] text-[#BB4D00] text-[18px] rounded-full "> {product.tag}</span></div>

                  {/* image and itle and price */}
                 <div className=" text-start space-y-3">
                        <div className=' border-1 border-gray-100 rounded-full p-2 w-[80px] shadow-sm '><img className='rounded-full' src={product.img} /></div>
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        <p className='text-[#627382]'>{product.description}</p>
                 </div>
                
                <h2 className='text-3xl text-start'>${product.price}<span className='text-[11px]'>/{product.period}</span></h2>

              {/* future */}
             <ul className="mt-6 flex flex-col gap-2 text-xs text-start">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{product.features1}</span>
                     </li>
                <li>
                     <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                     <span>{product.features2}</span>
                    </li>
                <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                     <span>{product.features3}</span>
                    </li>

              </ul>


            <div className="mt-6">
              <button className={`btn btn-primary  rounded-full w-full ${added ? 'bg-white text-[#4F39F6]' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'}`}
              onClick={buynowbtnfuntion}>
                { added ? 'Added Your Cart' : 'Buy Now'}
                
                </button>
            </div>


       </div>
             </div>
        </div>
    );
};

export default Productslist;