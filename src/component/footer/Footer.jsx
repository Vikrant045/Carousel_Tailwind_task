import React from 'react'

function Footer() {
  return (
    <footer className="w-full mt-10 bg-violet-600 bottom-0">
    <div className="  mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row bg-violet-600 ">
      <div className=" mt-8w-full mt-12 px-4 md:w-1/2 lg:px-0">
        <h1 className="max-w-sm text-3xl font-bold text-white">Subscribe to our Newsletter</h1>
        <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
          <input
            className="flex h-10 w-full bg-white border-2 rounded-md"
            type="email"
            placeholder="Email"
          ></input>
          <button
            type="button"
            className="ml-4 rounded-full bg-white px-3 py-3 text-sm font-semibold text-violet-600 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            send
          </button>
        </form>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div  className="mb-8 mt-6  lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white">Patient Tools</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
            </ul>
          </div>

          <div  className="mb-8 mt-6 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">Contact Us</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>

          <div  className="mb-8 mt-6 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-white ">About Medicines</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>
      </div>
    </div>
    <hr className="my-4" />
    <div className="mx-auto max-w-6xl mb-5 items-center justify-between px-4 md:flex lg:px-0 bg-violet-600 py-3">
      <div className="inline-flex items-center">
       
        <span className="ml-4 text-lg font-bold text-white">Push Doc</span>
      </div>
      <div className="mt-4 md:mt-0 bg-violet-600">
        <p className="text-sm font-medium text-white">© 2023 Push doc. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
