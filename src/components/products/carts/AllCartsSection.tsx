import React, { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'
import '../../../assets/index.scss'

interface CartProduct {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
}

interface Cart {
  id: number
  products: CartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

const CartPage: React.FC = () => {
  const [carts, setCarts] = useState<Cart[]>([])

  useEffect(() => {
    axios
      .get<{ carts: Cart[] }>('https://dummyjson.com/carts')
      .then((response) => {
        // Ensure that the response data includes the "carts" array
        if (Array.isArray(response.data.carts)) {
          setCarts(response.data.carts)
        } else {
          console.error(
            'API response does not include "carts" array:',
            response.data,
          )
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div className='cart-page'>
      <h1>Cart Page</h1>
      {carts.map((cart) => (
        <div key={cart.id} className='cart'>
          <h2>Cart ID: {cart.id}</h2>
          <table className='product-table'>
            <thead>
              <tr>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>${product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='total-info'>Total: ${cart.total}</p>
          <p className='total-info'>
            Discounted Total: ${cart.discountedTotal}
          </p>
          <p className='total-info'>Total Products: {cart.totalProducts}</p>
          <p className='total-info'>Total Quantity: {cart.totalQuantity}</p>
        </div>
      ))}
    </div>
  )
}

export default CartPage
