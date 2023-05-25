
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './components/Home/Home'
import { Signup } from './components/SignUp/signup'
import { Cart } from './components/cart'
import { Checkout } from './components/Checkout'
import { Shop } from './components/Shop'
import { ProductDetails } from './components/ProductDetails'
import { ThankYou } from './components/ThankYou'
import { Navbar } from './components/Navbar'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkOut' element={<Checkout />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/productDetails' element={<ProductDetails />} />
          <Route path='/thankYou' element={<ThankYou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
