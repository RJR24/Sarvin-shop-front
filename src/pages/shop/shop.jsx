import { Fragment } from "react";
import Product from "./product";
import { PRODUCTS } from "../../data/products";
const Shop = () => {
  return (
    <Fragment>
      <h1>Shop!</h1>
      <div className="row">
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </Fragment>
  );
};
export default Shop;
