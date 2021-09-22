import { Fragment } from "react";
import CartButton from "./CartButton";
import mealsImage from "../../Image/download .jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Your best home appliances</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Home" />
      </div>
    </Fragment>
  );
};

export default Header;
