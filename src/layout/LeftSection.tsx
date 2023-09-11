import React from 'react'
import { BiHeadphone } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import SidebarLink from './SidebarLink'
import { sidebarLinks } from '../constants'

const LeftSection: React.FC = () => {
  return (
    <div className='left-section'>
      <div className='Buttons'>
        <Link to='/get-all-products' className='btn3'>
          <strong>
            <i className='icon'>
              <BiHeadphone />
            </i>{' '}
            Products
          </strong>
        </Link>
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.text} to={link.to} text={link.text} />
        ))}
      </div>
    </div>
  )
}

export default LeftSection
