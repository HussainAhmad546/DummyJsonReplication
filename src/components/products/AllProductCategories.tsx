import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useProductCategories } from '../../hooks/useProductCategories'

const AllProductCategoriesSection: React.FC = () => {
  const allProductCategories = useProductCategories()

  return (
    <>
      <h2 className='headerR2'>
        <i>
          <BiPaperPlane />
        </i>{' '}
        All Product Categories
      </h2>
      <div className='all-product-categories'>
        <ul>
          {allProductCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AllProductCategoriesSection
