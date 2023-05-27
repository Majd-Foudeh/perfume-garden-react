
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
import { Contact } from './components/contact'
import { UserProfile } from './components/userProfile'
import { EditProfile } from './components/EditProfile'
import { About } from './components/About'
import { Login } from './components/Login'



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
