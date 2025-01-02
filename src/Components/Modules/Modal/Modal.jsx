import { MdOutlineCancel } from "react-icons/md";
import Wrapper from "./Wrapper";

export default function Modal({ children, setIsOpen }) {
  return (
    <Wrapper>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        <MdOutlineCancel />
      </button>
      {children}
    </Wrapper>
  );
}
