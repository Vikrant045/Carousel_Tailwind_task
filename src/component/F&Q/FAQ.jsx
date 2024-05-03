import React from 'react'
import Accordion from './Accordion'
function FAQ() {
  return (
    <div className='ml-64  mt-8 sm:w-full sm:mx-10'>
      
      <span className=' sm:w-full sm:mx-4 text-3xl font-bold ml-64 mt-4 text-neutral-400'>Frequent Asked Questions</span>
      <div className='mr-24 mt-7'>
        <Accordion question="What Is Your Name" answer="My Name is Vikrant"/>
        <Accordion question="What Is Your Name" answer="My Name is Vikrant"/>
        <Accordion question="What Is Your Name" answer="My Name is Vikrant"/>
        <Accordion question="What Is Your Name" answer="My Name is Vikrant"/>
        <Accordion question="What Is Your Name" answer="My Name is Vikrant"/>

      </div>
    </div>
  )
}

export default FAQ
