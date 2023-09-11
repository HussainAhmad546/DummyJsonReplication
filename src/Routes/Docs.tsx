import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSection from '../layout/LeftSection'

const Docs: React.FC = () => {
  return (
    <div className='docs-container'>
      <LeftSection />
      <div className='right-section'>
        <Outlet />
      </div>
    </div>
  )
}

export default Docs
