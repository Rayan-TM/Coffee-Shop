import Container from "../../../Shared/Container";
import Wrapper from "./Wrapper";
import {
  BsInstagram,
  BsTwitterX,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <Wrapper>
      <Container className="container">
        <img loading="lazy" src="/images/logo.webp" alt="logo" />
        <div className="details">
          <div className="column">
            <h5>Address</h5>
            <p className="content">
              2176 John Avenue, East Lansing,
              <br /> Michigan, 48823, United States
            </p>
          </div>
          <div className="column">
            <h5>Working hours</h5>
            <p className="content">
              Whole week: 11 am - 10 pm
              <br />
              Friday: 8 am - 2 pm
            </p>
          </div>
          <div className="column">
            <h5>Stay in touch</h5>
            <p className="content">
              Phone: 909 22 66 021
              <br />
              coffeeShop@gmail.com
            </p>
          </div>
        </div>
        <div className="bottom-section">
          <div className="copyright">
            © All rights belong to the coffee shop | Design by Rayan Web
          </div>
          <div className="social-links">
            <BsInstagram />
            <BsTwitterX />
            <BsFacebook />
            <BsLinkedin />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
