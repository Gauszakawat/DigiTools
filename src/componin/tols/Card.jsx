import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import Addedproductslist from './Addedproductslist';

const Card = ({fetchproducts, setaddedproducts, addedproducts}) => {
    console.log(addedproducts);
    const removefuntion = (adedProduc)=>{
        console.log(adedProduc);
        
    }
    return (
        <div>
            <div className="card  w-full bg-base-100 shadow-sm text-start space-y-4 p-10 ">

                  <h1 className='font-bold text-2xl mb-2'>Your Cart</h1>

                  {
                        addedproducts.map(adedProduc => {
                            return <Addedproductslist adedProduc={adedProduc}></Addedproductslist>
                      }
                        )
                     }

                     

            </div>
        </div>
    );
};

export default Card;