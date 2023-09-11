import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarLinkProps {
  to: string
  text: string
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, text }) => {
  return (
    <li className='list-style'>
      <Link to={to} className='btn3'>
        {text}
      </Link>
    </li>
  )
}

export default SidebarLink
