import React from 'react'

function Card() {
  return (
    <div className="w-[400px] ml-16 rounded-md border-2 border-violet-600">
     
      <div className="p-4">
        <h1 className="text-2xl text-violet-600 font-semibold">Weight Loss Program</h1>
        <p className="mt-3 font-semibold text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          Excepturi, debitis?
        </p>


        <div className='mt-5'>
        <span className='text-1xl font-bold mt-16 text-violet-600'>MemberShip Includes : </span>
          <ul className="list-disc pl-5 mt-2" style={{ listStyleColor: 'purple' }}>
            <li className='mt-1 text-sm text-neutral-500 '>  Monthly check ins with doctor</li>
            <li className='mt-1 text-sm text-neutral-500 '>  Monthly check ins with doctor</li>
            <li className='mt-1 text-sm text-neutral-500'>  Monthly check ins with doctor</li>
            <li className='mt-1 text-sm text-neutral-500'>  Monthly check ins with doctor</li>
          </ul>
        </div>
          
          <button className='bg-violet-600 w-full text-white text-1xl font-semibold p-2 border rounded-md mt-3'>demo</button>
      </div>
    </div>
  )
}

export default Card
