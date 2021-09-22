import { useState } from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown, setOrderProduct] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
    console.log("Ordering...");
  };

  const orderCartHandler = () => {
    setOrderProduct(false);
    console.log("Ordering...");
    return {};
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>{<Products onClose={orderCartHandler} />}</main>
    </CartProvider>
  );
}

export default App;
