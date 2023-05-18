
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home/Home'
import { Signup } from './components/SignUp/signup'



function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
