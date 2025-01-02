import {
  TiStarOutline,
  TiStarHalfOutline,
  TiStarFullOutline,
} from "react-icons/ti";
import Wrapper from "./Wrapper";

export default function Star({ rate }) {
  const maxRate = 5;
  const finalRating = Math.round(rate * 2) / 2;
  const fullStars = Math.floor(finalRating);
  const hasHalfStar = finalRating % 1 !== 0;
  const emptyStars = maxRate - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Wrapper>
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <TiStarFullOutline key={index} className="star full" />
        ))}

      {hasHalfStar && <TiStarHalfOutline className="star half" />}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <TiStarOutline key={index} className="star empty" />
        ))}
    </Wrapper>
  );
}
