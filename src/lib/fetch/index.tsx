import { toast } from 'react-toastify'
import { Product } from '../../types'

export async function fetchAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    toast.success('Products fetched successfully')
    return data.products
  } catch (error) {
    toast.error('Failed to fetch products')
    throw error
  }
}

export async function fetchSingleProduct(productId: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await response.json()
    toast.success('Product fetched successfully')
    return data
  } catch (error) {
    toast.error('Failed to fetch product')
    throw error
  }
}

export async function fetchSearchedProducts(productName: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${encodeURIComponent(
        productName,
      )}`,
    )
    const data = await response.json()
    toast.success('Products fetched successfully')
    return data.products
  } catch (error) {
    toast.error('Failed to fetch products')
    throw error
  }
}

export async function fetchLimitedSkippedProducts(
  limit: number,
  skip: number,
  select: string,
) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`,
    )
    const data = await response.json()
    toast.success('Products fetched successfully')
    return data.products
  } catch (error) {
    toast.error('Failed to fetch products')
    throw error
  }
}

export async function fetchAllProductCategories() {
  try {
    const response = await fetch('https://dummyjson.com/products/categories')
    const data = await response.json()
    toast.success('Product categories fetched successfully')
    return data
  } catch (error) {
    toast.error('Failed to fetch product categories')
    throw error
  }
}

export async function fetchProductsOfCategory(
  category: string,
): Promise<Product[]> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`,
    )
    const data = await response.json()
    toast.success('Products of category fetched successfully')
    return data.products as Product[]
  } catch (error) {
    toast.error('Failed to fetch products of category')
    throw error
  }
}
