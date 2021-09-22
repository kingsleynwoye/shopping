import { useContext } from "react";
import ProductListForm from "./ProductListForm";
import classes from "./ProductsList.module.css";
import CartContext from "../../../Store/cart-context";
// import ProductListForm from "./ProductListForm";

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{props.div}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>{<ProductListForm onAddToCart={addToCartHandler} />}</div>
    </li>
  );
};

export default ProductList;
