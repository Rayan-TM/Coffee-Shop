import Count from "../Header/Count";
import { FaShoppingBasket } from "react-icons/fa";
import Wrapper from "./Wrapper";

export default function BasketButton({ classes, elem }) {
  return (
    <Wrapper as={elem} className={classes}>
      <Count>0</Count>
      <FaShoppingBasket />
    </Wrapper>
  );
}
