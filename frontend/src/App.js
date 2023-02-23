import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Shop from "./pages/shop/Shop";
import Sellers from "./pages/sellers/Sellers";
import Seller from "./pages/seller/Seller";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import SellerLogin from "./pages/sellerlogin/SellerLogin";
import SellerRegister from "./pages/sellerlogin/SellerRegister";
import Shipping from "./pages/shipping/Shipping";
import Payment from "./pages/payment/Payment";
import PlaceOrder from "./pages/placeorder/PlaceOrder";
import OrderScreen from "./pages/order/OrderScreen";
import Allproducts from "../src/components/filter/Allproducts";
import Profile from "./pages/profile/Profile";
import AllItems from "./pages/allitems/AllItems";
import Home from "./components/allItems/Home";
import Home2 from "./components/allItems/Home2";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/shop" component={Allproducts} exact />
          <Route path="/seller" component={Seller} />
          {/* <Route path="/seller:id" component={Seller} exact /> */}
          <Route path="/product/:id" component={Product} exact />
          <Route path="/cart/:id?" component={Cart} exact />
          {/* <Route path="/slogin" component={SellerLogin} exact /> */}
          <Route path="/login2" component={SellerLogin} exact />
          <Route path="/register2" component={SellerRegister} exact />
          <Route path="/shipping" component={Shipping} exact />
          <Route path="/payment" component={Payment} exact />
          <Route path="/placeorder" component={PlaceOrder} exact />
          <Route path="/order/:id" component={OrderScreen} exact />
          {/* <Route path="/allproducts" component={Allproducts} exact /> */}
          <Route path="/profile" component={Profile} exact />
          <Route path="/allitem" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          {/* <Route path="/allitem" component={Home2} exact /> */}
          {/* <HomeScreen /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
