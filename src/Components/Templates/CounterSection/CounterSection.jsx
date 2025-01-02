import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { FaPlus } from "react-icons/fa";
import useOnScreen from "../../../Hooks/useOnScreen";

export default function CountUpSection() {
  const [target, isVisible] = useOnScreen();
  const initialCounts = [
    { id: 1, name: "Sales", target: 6500, number: 0 },
    { id: 2, name: "Customers", target: 1300, number: 0 },
    { id: 3, name: "Revenue", target: 5000, number: 0 },
  ];

  const [counts, setCounts] = useState(initialCounts);

  useEffect(() => {
    if (isVisible) {
      const framesPerSeconds = 60;
      const duration = 2;
      const totalFrames = duration * framesPerSeconds;
      let currentFrame = 0;

      const animateNumbers = () => {
        currentFrame++;

        const progress = Math.min(currentFrame / totalFrames, 1);

        setCounts((prevCounts) =>
          prevCounts.map((count) => ({
            ...count,
            number: Math.floor(count.target * progress),
          }))
        );

        if (progress < 1) {
          requestAnimationFrame(animateNumbers);
        }
      };

      requestAnimationFrame(animateNumbers);
    }
  }, [isVisible]);

  return (
    <Wrapper ref={target}>
      <div className="overlay">
        {counts.map((count) => (
          <div key={count.id}>
            <p>{count.name}</p>
            <h2>
              <FaPlus size={30} />
              {count.number}
            </h2>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
