
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/pages/Footer'
import { Home } from './components/Home/Home' 
import { Signup } from './components/SignUp/signup'
import { Cart } from './components/pages/cart'
import { Checkout } from './components/pages/Checkout'
import { Shop } from './components/pages/Shop'
import { ProductDetails } from './components/pages/ProductDetails'
import { ThankYou } from './components/pages/ThankYou'
import { Navbar } from './components/pages/Navbar'
import { Contact } from './components/pages/contact'
import { UserProfile } from './components/pages/userProfile'
import { EditProfile } from './components/pages/EditProfile'
import { About } from './components/pages/About'
import { Login } from './components/pages/Login'



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
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/userprofile' element={<UserProfile/>}/>
          <Route path='/editprofile' element={<EditProfile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
