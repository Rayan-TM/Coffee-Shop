import Wrapper from "./Wrapper";
import Container from "../../../Shared/Container";
import Reasons from "./Reasons";
import Heading2 from "../../../Shared/Heading2";
import { useEffect, useState } from "react";

export default function WhyUs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.documentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.documentElement.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
      <Container as={Wrapper}>
        <Heading2>Why choose us?</Heading2>
        <p>
          On our coffee shop site, we offer you a different online shopping
          experience with the best quality, fast service and competitive prices.
          Our goal is to create delicious and unforgettable moments for you.
        </p>

        <div className="content">
          <Reasons startIndex={0} endIndex={3} />
          <img
            loading="lazy"
            src="/images/coffee.webp"
            alt="cup of coffee"
            style={{
              transform: `translate(${
                (-mousePosition.x - window.innerWidth / 2) / 100
              }px, ${(-mousePosition.y - window.innerHeight / 2) / 100}px)`,
            }}
          />
          <Reasons startIndex={3} />
        </div>
      </Container>
  );
}
