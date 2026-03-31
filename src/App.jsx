
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './componin/hero/Hero'
import Nabver from './componin/navber/Nabver'
import Pricing from './componin/Pricing/Pricing'
import Steps from './componin/step/Steps'
import Tols from './componin/tols/Tols'
import Workflow from './componin/Workflow/Workflow'

function App() {

  const fetchproductsapi = async ()=>{
    const ren = await fetch('/data.json');
    return ren.json();
  }
const fetchproducts = fetchproductsapi();
const [countiteam, setcountiteam] = useState(0);
const [addedproducts, setaddedproducts] = useState([]);

  return (
    <>
      <Nabver countiteam={countiteam}></Nabver>
      <Hero></Hero>
      
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Tols fetchproducts={fetchproducts} countiteam={countiteam} setcountiteam={setcountiteam} addedproducts={addedproducts} setaddedproducts={setaddedproducts} ></Tols>
      </Suspense>

      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
    </>
  )
}

export default App
