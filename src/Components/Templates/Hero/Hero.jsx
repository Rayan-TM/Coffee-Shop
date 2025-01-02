import Wrapper from "./Wrapper";
import CTAButton from "../../../Shared/CTAButton";
import Container from "../../../Shared/Container";
import TypeWriter from "../../Modules/TypeWriter/TypeWriter";
import useOnScreen from "../../../Hooks/useOnScreen";

export default function Hero() {
  const [target, isVisible] = useOnScreen();

  console.log("isvisible hero typwriter");

  return (
    <Wrapper ref={target}>
      <Container className="container">
        <small>New collection</small>
        <h1>
          Start your day with
          <br />
          {isVisible && (
            <>
              <TypeWriter
                texts={["A black coffee", "An Espresso", "A Cappuccino"]}
              />
              ☕
            </>
          )}
        </h1>
        <CTAButton>Explore</CTAButton>
      </Container>
    </Wrapper>
  );
}
