import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSearchedProducts } from '../lib/fetch'

interface Product {
  title: string
  price: number
}

export function useSearchProducts() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const productName = searchParams.get('q') || ''
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchSearchedProducts(productName)
        setSearchedProducts(products)
      } catch (error) {
        setSearchedProducts([])
      }
    }

    fetchProducts()
  }, [productName])

  return searchedProducts
}
