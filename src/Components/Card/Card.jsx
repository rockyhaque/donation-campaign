import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardOfCard from "./CardOfCard";


const Card = () => {
  const [card, setCard] = useState();

  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    if(cards) {
      const findCard = cards?.find((card) => card.id === parseInt(id));
      setCard(findCard);
    }
  }, [id, cards]);

  console.log(card);

  return (
    <div>
      <CardOfCard card={card}></CardOfCard>
    </div>
  );
};

export default Card;
