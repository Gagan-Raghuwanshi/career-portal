import React, { useState } from 'react'

function ModelHomePage({setPopup}) {

  return (
    <div className='bg-black bg-opacity-30 backdrop-blur-sm w-full h-full fixed z-50 flex items-center justify-center '>
      <div className="bg-white w-[500px] h-[500px]">
        <form action="">
          <div className="justify-end flex">
            <div
             className="text-xl font-semibold bg-white text-black border-2 rounded-full w-8 h-8 flex items-center justify-center border-yellow-500 -mt-7 -mr-7 cursor-pointer"
             onClick={setPopup}
            >
              X
            </div>
          </div>
          <p className="border-b-2 text-xl mt-5 px-5 pb-3 text-yellow-600">
            Quick Enquiry Form
          </p>
          <div className="flex flex-col gap-5">
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="text"
                name="Fname"
                placeholder="First Name*"
                className="outline-none text-xl border-b-2"
              />
              <input
                type="text"
                name="Lname"
                placeholder="Last Name*"
                className="outline-none text-xl border-b-2"
              />
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="email"
                name="Email"
                placeholder="Email*"
                className="outline-none text-xl border-b-2"
              />
              <input
                type="number"
                placeholder="Phone No*"
                name="Phone"
                className="outline-none text-xl border-b-2"
              />
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="text"
                placeholder="Message"
                name="Message"
                className="w-full mx-4 outline-none text-xl border-b-2"
              />
            </div>
            <div className="flex justify-end mr-4">
              <button
                className="py-2 px-6 font-bold text-white bg-yellow-500 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModelHomePage