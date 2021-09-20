import mealsImage from "../../Image/download .jpg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div>
      <header className={classes.header}>
        <h1>Your best home Appliances</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="At your lowest price" />
          </div>
    </div>
  );
};

export default Header;