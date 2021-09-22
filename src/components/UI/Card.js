import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
      <div className={classes.actions}></div>
    </div>
  );
};

export default Card;
