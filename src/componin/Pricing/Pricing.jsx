import React from 'react';

const Pricing = () => {
    return (
        <div className=' mx-auto py-[50px]  justify-center mt-4 text-center px-5'>

           <h1 className='text-[40px] font-bold'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className="card flex flex-col  lg:flex-row gap-4 justify-center mt-8 ">

                 <div className=" card w-76 bg-[#F9FAFC] shadow-sm text-start w- ">
                   <div className="card-body w-full  justify-between">
                 

                <div> <div className=" text-start space-y-1">
                    

                  <h2 className="text-3xl font-semibold ">Starter</h2>
                 <p className='text-[#627382]'>Perfect for getting started</p>
                 </div>
                
                <h2 className='text-3xl text-start '> <span className='font-bold'>$0</span> <span className='text-[11px]'>/month</span></h2>

             <ul className="mt-6 flex flex-col gap-2 text-xs text-start">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Access to 10 free tools</span>
                 </li>
             <li>
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Basic templates</span>
             </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Community support</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>1 project per month</span>
            </li>

    </ul>
</div>

    <div className="mt-6">
      <button className="btn btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full">Get Started Free</button>
    </div>
                </div>
              </div>


               <div className="card w-76  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-sm text-start text-white ">
                   <div className="card-body w-full">
                 
                       <div className='  text-end '><span className="badge badge-xs absolute -top-3 right-21  py-3 bg-[#FEF3C6] text-[#BB4D00] text-[18px] rounded-full ">Most Popular</span></div>


                 <div className=" text-start space-y-1">
                    

                  <h2 className="text-3xl font-semibold ">Pro</h2>
                 <p className=''>Best for professionals</p>
                 </div>
                
                <h2 className='text-3xl text-start '> <span className='font-bold'>$29</span> <span className='text-[11px]'>/month</span></h2>

             <ul className="mt-6 flex flex-col gap-2 text-xs text-start">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Access to all premium tools</span>
                 </li>
             <li>
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Unlimited templates</span>
             </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Priority support</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Unlimited projects</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Cloud sync</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Advanced analytics</span>
            </li>
            

    </ul>


    <div className="mt-6">
      <button className="btn btn-primary  bg-white rounded-full w-full text-[#4F39F6]">Start Pro Trial</button>
    </div>
                </div>
              </div>



               <div className="card w-76 bg-[#F9FAFC] shadow-sm text-start w- ">
                   <div className="card-body w-full">
                 

                 <div className=" text-start space-y-1">
                    

                  <h2 className="text-3xl font-semibold ">Enterprise</h2>
                 <p className='text-[#627382]'>For teams and businesses</p>
                 </div>
                
                <h2 className='text-3xl text-start '> <span className='font-bold'>$99</span> <span className='text-[11px]'>/month</span></h2>

             <ul className="mt-6 flex flex-col gap-2 text-xs text-start">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Everything in Pro</span>
                 </li>
             <li>
             <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Team collaboration</span>
             </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Custom integrations</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Dedicated support</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>SLA guarantee</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
             <span>Custom branding</span>
            </li>
            

    </ul>


    <div className="mt-6">
      <button className="btn btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full">Contact Sales</button>
    </div>
                </div>
              </div>




            </div>
        </div>
    );
};

export default Pricing;