import React from 'react';
// import { MdAddShoppingCart } from 'react-icons/md';
import Addedproductslist from './Addedproductslist';
import Emty from './Emty';

const Card = ({fetchproducts, setaddedproducts, addedproducts, countiteam, setcountiteam, totalP, settotalP}) => {
    console.log(addedproducts.length)
    
    return (
        <div>
            <div className="card  w-full bg-base-100 shadow-sm text-start space-y-4 p-10 ">

                <h1 className='font-bold text-2xl mb-2'>Your Cart</h1>
                
                  
                 { addedproducts.length === 0 ? 
                 
                 <Emty addedproducts={addedproducts}></Emty>

                 :

                 <Addedproductslist totalP={totalP} settotalP={settotalP} countiteam={countiteam} setcountiteam={setcountiteam} setaddedproducts={setaddedproducts} addedproducts={addedproducts}></Addedproductslist>

               
                 }

                     

            </div>
        </div>
    );
};

export default Card;