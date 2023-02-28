import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop";
import { ShopContextProvider } from "./context/shop-context";
import Banner from "./components/Banner";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Banner/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
