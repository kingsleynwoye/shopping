import classes from "./ProductSummary.module.css";
import mealsImage from "../../Image/download.png";

const ProductSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Your Best Home Appliances</h2>
      <p>
        Choose your favorite home appliance from our board to enjoy a happy
        home,
      </p>
      <p>
        All our products are made by popular companies
        <p>But also at lowest price you can trust</p>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="Chef" />
        </div>
      </p>
    </section>
  );
};

export default ProductSummary;
