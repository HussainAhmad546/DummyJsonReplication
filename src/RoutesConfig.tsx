import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Docs from './Routes/Docs'
import NotFound from './Routes/NotFound'
import SingleProductSection from './components/products/SingleProduct'
import SearchProductsSection from './components/products/SearchProduct'
import LimitSkipProductsSection from './components/products/LimitSkipProducts'
import ProductsOfCategorySection from './components/products/ProductsOfCategory'
import AllProductCategoriesSection from './components/products/AllProductCategories'
import AllCartsSection from './components/products/carts/AllCartsSection'

const RoutesConfig = () => (
  <Routes>
    <Route path='/' element={<Docs />}>
      <Route path='product/:id' element={<SingleProductSection />} />
      <Route path='products/search/*' element={<SearchProductsSection />} />
      <Route path='/products' element={<LimitSkipProductsSection />} />
      <Route
        path='products/categories'
        element={<AllProductCategoriesSection />}
      />
      <Route
        path='products/category/*'
        element={<ProductsOfCategorySection />}
      />
    </Route>
    <Route path='*' element={<NotFound />} />
    <Route path='/carts' element={<AllCartsSection />} />
  </Routes>
)

export default RoutesConfig
