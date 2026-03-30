import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';

const Hero = () => {
    return (
        <div className=''>
            <div className='flex  justify-between py-[40px] w-11/12 mx-auto sm:flex-col lg:flex-row'>
                <div className="left flex flex-col  justify-center  align-middle space-y-4 ">
                    <p className='text-[#9514FA] flex gap-2 items-center bg-[#E1E7FF] rounded-full w-[276px] px-1'><GoDotFill></GoDotFill> New: AI-Powered Tools Available</p>
                    <h2 className='text-[26px] font-bold lg:leading-[84px] sm:text-[20px] md:text-[20px] lg:text-[72px] '>Supercharge Your <br /> Digital Workflow</h2>
                    <p className='text-[#627382] '>Access premium AI tools, design assets, templates, and productivity <br />
                       software—all in one place. Start creating faster today. <br />
                       Explore Products
                       </p>
                    <div className='mt-5 space-x-1'>
                        <button className='btn btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Explore Products</button>
                        <button className='btn btn-dash btn-primary rounded-full'><CiPlay1></CiPlay1>Watch Demo</button>
                    </div>
                </div>
                <div className="right">
                    <img src="../../../assets/banner.png" alt="" />
                </div>
            </div>
            <div className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex justify-between text-white text-center py-[60px] '>
              
             <div class="flex-1 justify-center">
              <h2 class="text-6xl font-bold">50K+</h2>
                 <p class="mt-2 text-sm text-gray-200">Active Users</p>
                </div>

    
               <div class="h-12 w-px bg-white/40"></div>
 
    
             <div class="flex-1 justify-center">
                <h2 class="text-6xl font-bold">200+</h2>
                  <p class="mt-2 text-sm text-gray-200">Premium Tools</p>
                </div>

    
                <div class="h-12 w-px bg-white/40"></div>

    
               <div class="flex-1 justify-center">
                 <h2 class="text-6xl font-bold">4.9</h2>
               <p class="mt-2 text-sm text-gray-200">Rating</p>
                 </div>



            </div>
            
        </div>
    );
};

export default Hero;