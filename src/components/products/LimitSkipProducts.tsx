import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { useLimitSkipProducts } from '../../hooks/useLimitSkipProducts'

const LimitSkipProductsSection: React.FC = () => {
  const {
    limitedSkippedProducts,
    limit,
    setLimit,
    skip,
    setSkip,
    select,
    setSelect,
  } = useLimitSkipProducts()

  return (
    <>
      <h2 className='headerR2'>
        <i>
          <BiPaperPlane />
        </i>{' '}
        Limit & Skip Products
      </h2>
      <div className='input-section'>
        <div>
          <label>Limit:</label>
          <input
            type='number'
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Skip:</label>
          <input
            type='number'
            value={skip}
            onChange={(e) => setSkip(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Select:</label>
          <input
            type='text'
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          />
        </div>
      </div>
      <div className='limited-skipped-product-list'>
        {limitedSkippedProducts.map((product) => (
          <div key={product.title} className='limited-skipped-product'>
            <h3>Title: {product.title}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LimitSkipProductsSection
