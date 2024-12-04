import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='py-3  backdrop-blur-sm w-full   sticky top-0 flex justify-between' >

            <div className='mx-5 '>
                <span className='text-[#F8EE00] font-bold'>A</span><span className='text-white font-bold'>NAND</span>
            </div>
            <Link to="/upload">
        <button className='bg-[#F8EE00]/90 px-3 py-2 rounded-2xl mx-5 hover:bg-[#F2F0F8]/50 hover:scale-[1.1]  transition-all '>+ Create Post</button>
            </Link>
    </div>
  )
}

export default Navbar

