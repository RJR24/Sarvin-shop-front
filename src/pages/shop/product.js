import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
const Products = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { removeFromCart, addToCart, cartItems } = useContext(ShopContext);
  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <div className="col-3">
      <img src={productImage} alt="product" className="w-50" />

      <h5>{productName}</h5>
      <p>price: {price}£</p>
      {isInCart && (
        <button
          className="btn btn-info btn-sm"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
      )}
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
    </div>
  );
};
export default Products;
