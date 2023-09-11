import { useState, useEffect } from 'react'
import { fetchProductsOfCategory } from '../lib/fetch'

interface Product {
  title: string
  price: number
}

export function useProductsOfCategory(category: string) {
  const [productsOfSelectedCategory, setProductsOfSelectedCategory] = useState<
    Product[]
  >([])

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const products = await fetchProductsOfCategory(category)
        setProductsOfSelectedCategory(products)
      } catch (error) {
        console.error('Failed to fetch products of category:', error)
      }
    }

    fetchCategoryProducts()
  }, [category])

  return productsOfSelectedCategory
}
