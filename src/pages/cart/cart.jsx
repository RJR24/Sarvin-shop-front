// import React, { useContext } from "react";
// import { PRODUCTS } from "../../data/products";
// import { ShopContext } from "../../context/shopContext";
// import Product from "../shop/product";
import BasketDropdown from "../../components/BasketMenu/BasketDropdown";

const Cart = () => {
  return (
    <BasketDropdown/>
    );
  };
  export default Cart;
  

    // const { cartItems, clearShoppingCart } = useContext(ShopContext);
  // <React.Fragment>
  //   <h1>Selected Items In Your Cart</h1>
  //   <div className="row">
  //     {PRODUCTS.map((p) => {
  //       if (cartItems?.some((i) => i.id === p.id && i.count > 0))
  //         return <Product data={p} />;
  //     })}
  //   </div>
  //   <button className="btn btn-warning m-3" onClick={clearShoppingCart}>
  //     Clear
  //   </button>
  // </React.Fragment>