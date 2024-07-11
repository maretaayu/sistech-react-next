import { Card } from "./Card";
import type { CardProps } from "./Card";

type CardListProps = {
  cards: CardProps[];
};

function CardList({ cards }: CardListProps) {
  return (
    <div className="flex gap-12">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export { CardList };
