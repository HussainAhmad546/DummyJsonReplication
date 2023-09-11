import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useAllProducts } from '../../hooks/useAllProducts'

const AllProductsSection: React.FC = () => {
  const allProducts = useAllProducts()

  return (
    <>
      <h2 className='headerR2'>
        <BiPaperPlane /> All Products
      </h2>
      <div className='product-list'>
        {allProducts.map((product) => (
          <div key={product.title} className='product'>
            <h3>Name: {product.title}</h3>
            <p>Description: {product.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllProductsSection
