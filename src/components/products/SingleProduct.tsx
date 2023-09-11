import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useSingleProduct } from '../../hooks/useSingleProduct'

const SingleProductSection: React.FC = () => {
  const singleProduct = useSingleProduct()

  return (
    <>
      <h2 className='headerR2'>
        <i>
          <BiPaperPlane />
        </i>{' '}
        My Single Products
      </h2>
      {singleProduct ? (
        <div className='single-product'>
          <h2>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default SingleProductSection
