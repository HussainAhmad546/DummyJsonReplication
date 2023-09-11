import { useState, useEffect } from 'react'
import { fetchAllProducts } from '../lib/fetch'

interface Product {
  title: string
  description: string
}

export function useAllProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchAllProducts()
        setAllProducts(products)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }

    fetchProducts()
  }, [])

  return allProducts
}
