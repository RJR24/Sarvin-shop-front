import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./onSaleProductsStyles.css";
import ProductOnSaleCard from "./ProductOnSaleCard";

import mouse from "../../assets/images/pro02/mouse.png";
import keyboard from "../../assets/images/pro02/keyboard.png";
import appleWatch from "../../assets/images/pro02/appleWatch.png";
import macBook from "../../assets/images/pro02/macBook.png";
import arrowCircleRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";

const onSaleProductsList = [
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: appleWatch,
  },
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: keyboard,
  },

  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: macBook,
  },

  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: mouse,
  },
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: macBook,
  },
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: mouse,
  },
  {
    data: { price: 100, specification: "model ...", discount: 0 },
    image: macBook,
  },
];
const OnSaleProducts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    // <>
    //   <div>
    //     <p>Products On Sale</p>
    //     <p>Shop Now!</p>
    //     <button className="btn ">
    //       View all <img src={arrowCircleRight} alt="right arrow" />
    //     </button>
    // </div>
    <Carousel  partialVisible={false} itemClass={{"padding-right": "300px!important"}} className="pOnSaleContainer" responsive={responsive}>
      {onSaleProductsList.map((item) => (
        <ProductOnSaleCard data={item.data} image={item.image} />
      ))}
    </Carousel>
    // </>
  );
};

export default OnSaleProducts;
