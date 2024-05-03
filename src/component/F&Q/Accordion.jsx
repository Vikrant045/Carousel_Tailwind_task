import React, { useState } from 'react'

function Accordion({question, answer}) {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className=' py-2 border-2 px-10'>
        <button className=' flex  w-full h-11 ' onClick={()=> setAccordionOpen(!accordionOpen)}>
           {
              accordionOpen ? <span className='font-bold text-2xl' >-</span> :  <span className='font-bold text-2xl' >+</span> 
            }
            <span className='text-1xl ml-6'>
            {question}
            </span>     
           
             
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
           accordionOpen ? 'grid-rows-[1fr] opacity-100': 'grid-rows-[0fr] opacity-0'
        }`}>
            <div className='overflow-hidden ml-9'>{answer}Note that the FDA has black-box warnings for semaglutide and tirzepatide. In rodents, all of these medications have been associated with an increased risk of thyroid C-cell tumors including medullary thyroid cancer (MTC).</div>
        </div>
      
    </div>
  )
}

export default Accordion
