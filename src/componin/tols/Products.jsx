import React, { use, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCheckmark } from 'react-icons/io5';
import Productslist from './Productslist';

const Products = ({fetchproducts, countiteam, setcountiteam, addedproducts, setaddedproducts}) => {
  const productsdata = use(fetchproducts)
  // console.log(productsdata.id);
    return (
        <div className='flex space-x-2 justify-center grid grid-cols-3 space-y-8'>
            {productsdata.map(product => {

              return <Productslist product={product} countiteam={countiteam} setcountiteam={setcountiteam} addedproducts={addedproducts} setaddedproducts={setaddedproducts} ></Productslist>

            })}
            
   

        </div>
    );
};

export default Products;