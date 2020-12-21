import { connect } from "react-redux";
import {
    addItem,
    clearItemFromCart,
    removeItem
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckouItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispacth) => ({
  clearItem: (item) => dispacth(clearItemFromCart(item)),
  addItem: (item) => dispacth(addItem(item)),
  removeItem: (item) => dispacth(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckouItem);
