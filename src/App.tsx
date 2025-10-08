import { Routes, Route } from 'react-router'

//Pages
import { ProductListingPage } from './features/product-listing'
import { ShoppingCartPage } from './features/shopping-cart'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProductListingPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  )
}

export default App
