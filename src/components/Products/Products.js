import { Fragment } from "react";

import ProductSummary from "./ProductSummary";
import AvailableProduct from "./AvailableProduct";

const Products = () => {
  return (
    <Fragment>
      <ProductSummary />
      <AvailableProduct />
    </Fragment>
  );
};

export default Products;
