
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home/Home'
import { Signup } from './components/SignUp/signup'
import { Cart } from './components/cart'
import { Checkout } from './components/Checkout'
import { Shop } from './components/Shop'
import { ProductDetails } from './components/ProductDetails'
import { ThankYou } from './components/ThankYou'



function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkOut' element={<Checkout/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/productDetails' element={<ProductDetails/>}/>
          <Route path='/thankYou' element={<ThankYou/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
