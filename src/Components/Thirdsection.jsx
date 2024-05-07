import React from 'react'
import You from './You'
const Thirdsection = () => {
  return (
    <div className="bg-black ">
      <div className="flex mr-32  items-center justify-center">
        <span className="text-xl flex mr-2 gap-2 font-bold ml-32  text-white">
          YOU MAY LIKE THIS
        </span>
        <hr className="border-t border-gray-400 flex-grow"/>
        <a href="#" className="text-white ml-2">see more</a>
      </div>
      <You/>
    </div>
  )
}

export default Thirdsection
