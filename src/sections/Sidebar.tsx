import React from 'react'

export default function Sidebar() {
  return (
    <div className='min-h-screen grid grid-cols-2'>
      {/* background section start */}
        <div className="bg-gradient-to-br from-orange-400 via-orange-400 to-orange-600 h-full">

        </div>
      {/* background section end */}

      {/* connect wallet start */}
       <div className="h-full flex flex-col justify-center">
        <div className="">
          <h4 className="text-center text-xl">Welcome to a world of amazing talents</h4>
        </div>
       </div>
      {/* connect wallet end */}
    </div>
  )
}
