import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useProductsOfCategory } from '../../hooks/useProductsOfCategory'

const ProductsOfCategorySection: React.FC = () => {
  const category = 'smartphones'
  const productsOfSelectedCategory = useProductsOfCategory(category)

  return (
    <>
      <h2 className='headerR2'>
        <i>
          <BiPaperPlane />
        </i>{' '}
        Products of Category
      </h2>
      <div className='products-of-category'>
        <h3>Products of Category: {category}</h3>
        <ul>
          {productsOfSelectedCategory.map((product) => (
            <li key={product.title}>
              <strong>Title:</strong> {product.title}, <strong>Price:</strong>{' '}
              {product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductsOfCategorySection
