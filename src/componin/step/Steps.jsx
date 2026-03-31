import React from 'react';

const Steps = () => {
    return (
        <div className='  mx-auto py-[50px] bg-[#F9FAFC] justify-center mt-15 text-center px-5'>
            <h1 className='text-[40px] font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        
      <div className='flex flex-col md:flex-row gap-5 mt-6 justify-center'>

            <div className="card bg-base-100 w-96 shadow-sm py-6">
               <div className=" card-body items-center text-center relative ">

                 <div className='absolute top-4 right-4'><p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold'>01</p></div>
                 
                 <div className='bg-[#F3E8FE] rounded-full mt-10 w-24 h-24 flex items-center justify-center mb-4 '><img src="../../../assets/user.png" alt="" /></div>
                <h2 className="text-2xl card-title font-bold ">Create Account</h2>
               <p className='text-[#627382] mb-10'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                
            
              </div>
            </div>


              <div className="card bg-base-100 w-96 shadow-sm py-6">
               <div className=" card-body items-center text-center relative ">

                 <div className='absolute top-4 right-4'><p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold'>02</p></div>
                 
                 <div className='bg-[#F3E8FE] rounded-full mt-10 w-24 h-24 flex items-center justify-center mb-4 '><img src="../../../assets/package.png" alt="" /></div>
                <h2 className="text-2xl card-title font-bold ">Choose Products</h2>
               <p className='text-[#627382] mb-10'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                
            
              </div>
            </div>



              <div className="card bg-base-100 w-96 shadow-sm py-6">
               <div className=" card-body items-center text-center relative ">

                 <div className='absolute top-4 right-4'><p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold'>03</p></div>
                 
                 <div className='bg-[#F3E8FE] rounded-full mt-10 w-24 h-24 flex items-center justify-center mb-4 '><img src="../../../assets/rocket.png" alt="" /></div>
                <h2 className="text-2xl card-title font-bold ">Start Creating</h2>
               <p className='text-[#627382] mb-10'>Download and start using your premium <br /> tools immediately.</p>
                
            
              </div>
            </div>



      </div>
       

        
        </div>
    );
};

export default Steps;