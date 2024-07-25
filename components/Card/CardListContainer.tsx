import { CardList } from "./CardList";
import { useEffect, useState } from "react";

function CardListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos/?_limit=2"
        );
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return <CardList cards={data} />;
}

export { CardListContainer };
