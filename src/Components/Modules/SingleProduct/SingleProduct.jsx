import Product from "./Product";
import { FaHeart, FaRegEye, FaShoppingBasket } from "react-icons/fa";
import Star from "../Star/Star";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductDetails from "../ProductDetails/ProductDetails";
import Off from "../../../Shared/Off";

export default function SingleProduct({ product }) {
  return (
    <Product>
      {product.off !== 0 && <Off className="off">{product.off}%</Off>}
      <button className="favorite">
        <FaHeart />
      </button>
      <img loading="lazy" src={`/images/${product.img}`} alt={product.name} />
      <div className="content">
        <Star rate={product.rate} />
        <h4>{product.name}</h4>
        <div className="footer">
          <div className="more-options">
            <button>
              <FaRegEye />
              <span>Quick view</span>
            </button>
            <button>
              <MdOutlineCompareArrows />
              <span>Compare</span>
            </button>
          </div>
          <ProductDetails {...product} />
          <button>
            <FaShoppingBasket />
            <span>Add to basket</span>
          </button>
        </div>
      </div>
    </Product>
  );
}
