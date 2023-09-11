import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useSearchProducts } from '../../hooks/useSearchProducts'

const SearchProductsSection: React.FC = () => {
  const searchedProducts = useSearchProducts()

  return (
    <>
      <h2 className='headerR2'>
        <i>
          <BiPaperPlane />
        </i>{' '}
        Search Products
      </h2>
      <div className='searched-product-list'>
        {searchedProducts.map((product) => (
          <div key={product.title} className='searched-product'>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchProductsSection
