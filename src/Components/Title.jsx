import React from 'react'

const Title = ({subHeading,heading}) => {
  return (
    <div className='mb-12 flex justify-center'>
       <div>
       <p className='text-xl font-normal text-[#D99904] text-center mb-4'>---{subHeading}---</p>
       <h1 className='text-[40px] font-normal text-[#151515] text-center border-y-4 border-[#E8E8E8] py-2'>{heading}</h1>
       </div>
    </div>
  )
}

export default Title