import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../lib/fetch'

interface Product {
  title: string
  description: string
}

export function useSingleProduct() {
  const { id } = useParams<{ id?: string }>()
  const [singleProduct, setSingleProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (id) {
      fetchSingleProduct(id)
        .then((productData) => setSingleProduct(productData))
        .catch(() => {
          // Handle error
        })
    }
  }, [id])

  return singleProduct
}
