import { useState, useEffect } from 'react'
import { fetchAllProductCategories } from '../lib/fetch'

export function useProductCategories() {
  const [allProductCategories, setAllProductCategories] = useState<string[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchAllProductCategories()
        setAllProductCategories(categories)
      } catch (error) {
        console.error('Failed to fetch product categories:', error)
      }
    }

    fetchCategories()
  }, [])

  return allProductCategories
}
