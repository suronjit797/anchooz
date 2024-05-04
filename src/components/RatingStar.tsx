import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type TProps = {
  rating: number;
};

const Star = ({ filled }: { filled: boolean }) => {
  return filled ? <AiFillStar color="gold" /> : <AiOutlineStar color="gold" />;
};

const RatingStars: React.FC<TProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < rating} />);
  }
  return <>{stars}</>;
};

export default RatingStars;
