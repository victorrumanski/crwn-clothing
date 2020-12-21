import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckouItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>
      <div className="header-block">Description</div>
      <div className="header-block">Quantity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckouItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: {total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
