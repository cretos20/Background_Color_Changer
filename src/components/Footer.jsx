import React from "react";
import { useState } from 'react'
function Footer() {
    const [color, setColor] = useState('black')
  
    return (
      <>
        <div style={{backgroundColor:color}} className='w-full h-screen duration-200 '>
          <div className='fixed flex justify-center bottom-12 inset-x-0 px-2 bg-white m-auto w-1/4 rounded-2xl'>
            <button 
            onClick={()=>setColor('Orange')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-orange-700'>Orange</button>
            <button 
            onClick={()=>setColor('White')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-slate-300'>White</button>
            <button 
            onClick={()=>setColor('Green')}
            className='outline-none px-4 py-1 rounded-full  shadow-lg text-black bg-lime-600'>Green</button>
  
          </div>
        </div>
      </>
    )
  }
export default Footer