import React from 'react'

const Banner = () => {
  return (
    <div className='px-10 flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 mb-10'>
          <div>
              <h1 className='text-7xl'>Your CapTon's Blog</h1>
              <h2 className='mt-5'>welcome to{" "}
                  <span className='underline decoration-4 decoration-[#0ACBCB]'>
                      Every Developers
                </span>{" "}
                favourite blog in the Devosphere
              </h2>
        </div>

          <p className='mt-5 md:mt-2 max-w-sm text-gray-400'>
              New Product features | The latest in technology | The weekly debugging nightmares and more!
        </p>
    </div>
  )
}

export default Banner
