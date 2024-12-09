import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartItemActions } from "../../store/cartItem";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  // const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  const addItemHandler = (event) => {
    dispatch(
      cartItemActions.addCartItem({
        id,
        title,
        price,
      })
    );
  };

  const removeItemHandler = (event) => {
    event.preventDefault();
    dispatch(cartItemActions.removeCartItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
