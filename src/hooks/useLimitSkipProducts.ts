import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { fetchLimitedSkippedProducts } from '../lib/fetch'

interface Product {
  title: string
  price: number
}

export function useLimitSkipProducts() {
  const [limitedSkippedProducts, setLimitedSkippedProducts] = useState<
    Product[]
  >([])
  const [limit, setLimit] = useState<number>(5)
  const [skip, setSkip] = useState<number>(0)
  const [select, setSelect] = useState<string>('title,price')

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const urlLimit = urlParams.get('limit')

    if (urlLimit) {
      setLimit(Number(urlLimit))
    }
  }, [location])

  const debouncedFetchProducts = useCallback(
    debounce(async () => {
      const newUrl = `/products?limit=${limit}&skip=${skip}&select=${select}`
      navigate(newUrl, { replace: true })

      const products = await fetchLimitedSkippedProducts(limit, skip, select)
      setLimitedSkippedProducts(products)
    }, 300),
    [limit, skip, select, navigate],
  )

  useEffect(() => {
    debouncedFetchProducts()
  }, [debouncedFetchProducts])

  return {
    limitedSkippedProducts,
    limit,
    setLimit,
    skip,
    setSkip,
    select,
    setSelect,
  }
}
