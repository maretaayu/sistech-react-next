import { CardList } from "./CardList";

const data = [
  {
    title: "lorem ipsum",
    description: "10 min",
    thumbnail: "/images/DummyThumbnail.png",
    url: "https://mareta.codes/",
  },
  {
    title: "lorem ipsum",
    description: "10 min",
    thumbnail: "/images/DummySleep.png",
    url: "instagram.com",
  },
];

function CardListContainer() {
  return <CardList cards={data} />;
}

export { CardListContainer };
