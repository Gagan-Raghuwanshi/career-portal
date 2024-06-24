import React from 'react'

function Cart({img}) {
  return (
    <div className=''>
        <div className="w-72 border-2">
            <div className=" cursor-pointer">
                <img src={img} />
            </div>
            <div className="p-5">
                <h6 className='font-semibold text-lg'>Full Stack website Designing: Beginner to Advance</h6>
                <p className='mt-4'><span className='font-medium'>Course contents:</span> HTML, CSS, JavaScript...</p>
                <h6 className='mt-4 font-medium cursor-pointer text-yellow-500 hover:text-yellow-600'>Explore More...</h6>
            </div>
        </div>
    </div>
  )
}

export default Cart