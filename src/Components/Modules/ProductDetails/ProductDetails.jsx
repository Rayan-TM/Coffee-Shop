import { CalculateDiscountedPrice } from "../../../utils";
import Wrapper from "./Wrapper";

export default function ProductDetails({ rate, price, off }) {
  return (
    <Wrapper>
      {off ? (
        <div className="price-container">
          <span className="curr-price">
            {CalculateDiscountedPrice(price, rate).toLocaleString()}$
          </span>
          <span className="prev-price">{price.toLocaleString()}$</span>
        </div>
      ) : (
        <span className="curr-price">{price.toLocaleString()}$</span>
      )}
    </Wrapper>
  );
}
