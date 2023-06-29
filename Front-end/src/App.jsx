import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Signup } from "./components/SignUp/signup";
import { Cart } from "./components/pages/cart";
import { Checkout } from "./components/pages/Checkout";
import { Shop } from "./components/pages/Shop";
import { ProductDetails } from "./components/pages/ProductDetails";
import { ThankYou } from "./components/pages/ThankYou";
import { Contact } from "./components/pages/contact";
import { UserProfile } from "./components/pages/userProfile";
import { EditProfile } from "./components/pages/EditProfile";
import { About } from "./components/pages/About";
import { Login } from "./components/pages/Login";
import Layout from "./layout/layout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Page404 } from "./components/pages/Page404";
import { CheckoutCard } from "./components/checkout/checkoutCard";

function App() {
  const [hideNav, setHideNav] = useState(false);
  const { auth } = useContext(AuthContext);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <ScrollToTop />

            <Layout hideNav={hideNav} setHideNav={setHideNav}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkOut" element={<Checkout />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/productDetails/:id"
                  element={<ProductDetails />}
                />
                <Route path="/thankYou" element={<ThankYou />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/userprofile" element={<UserProfile />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/card" element={<CheckoutCard />} />
              </Routes>
            </Layout>
          </>
        ) : (
          <>
            <ScrollToTop />

            <Layout hideNav={hideNav} setHideNav={setHideNav}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkOut" element={<Checkout />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/productDetails/:id"
                  element={<ProductDetails />}
                />
                <Route path="/thankYou" element={<ThankYou />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/userprofile" element={<Page404 />} />
                <Route path="/editprofile" element={<Page404 />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/card" element={<CheckoutCard />} />
              </Routes>
            </Layout>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
