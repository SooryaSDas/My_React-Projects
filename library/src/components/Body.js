import React from 'react'
import Sidebar from './Sidebar'
import BodyContainer from './BodyContainer'

const Body = () => {
  return (
    <div className='flex bg-green-500'>
        <Sidebar/>
        <BodyContainer/>
    </div>
  )
}

export default Body