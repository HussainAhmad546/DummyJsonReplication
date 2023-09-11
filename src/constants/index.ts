const productId = 1
const productName = 'laptop'
const category = 'smartphones'
const cartId = 123

export const sidebarLinks = [
  { to: '/products', text: 'Get all products' },
  { to: `/product/${productId}`, text: 'Get a single product' },
  {
    to: `/products/search?q=${encodeURIComponent(productName)}`,
    text: 'Search products',
  },
  { to: '/products', text: 'Limit & Skip products' },
  { to: 'products/categories', text: 'Get all products categories' },
  { to: `products/category/${category}`, text: 'Get products of category' },
  { to: '/carts', text: 'Get all carts' },
  { to: `/cart/${cartId}`, text: 'Get a single cart' },
  { to: '/user-carts', text: 'Get carts of user' },
  { to: '/add-cart', text: 'Add a cart' },
  { to: `/update-cart/${cartId}`, text: 'Update a cart' },
  { to: `/delete-cart/${cartId}`, text: 'Delete a cart' },
]
