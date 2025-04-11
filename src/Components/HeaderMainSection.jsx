import React from 'react'

export default function HeaderMainSection({children}) {
  return (
    < div className="flex  items-center text-black pb-2">
        <h1 className='font-bold text-2xl capitalize'>{children}</h1>
    </div>
  )
}

