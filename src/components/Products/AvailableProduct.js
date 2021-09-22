import Card from "../UI/Card";
import ProductList from "./ProductList/ProductList";
import classes from "./AvailableProducts.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Monitor",
    description: "Dell monitor",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Laptop",
    description: "Iphone laptop",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Washing Machine",
    description: "Samsung washing machine",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Freezer",
    description: "Fast deep freezer",
    price: 18.99,
  },
  {
    id: "m5",
    name: "(AC) Air Condition",
    description: "Royal air condition",
    price: 20.99,
  },
  {
    id: "m6",
    name: "Home Theater",
    description: "Samsung home theater",
    price: 15.89,
  },
  {
    id: "m7",
    name: "Electric gas cooker",
    description: "Electric cooker",
    price: 23.99,
  },
];

const AvailableProduct = () => {
  const Product = DUMMY_PRODUCTS.map((Product) => (
    <ProductList
      key={Product.id}
      id={Product.id}
      name={Product.name}
      description={Product.description}
      price={Product.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Product}</ul>
      </Card>
    </section>
  );
};

export default AvailableProduct;
