import Image from "next/image";
import Link from "next/link";

type CardProps = {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
};

function Card({ thumbnail, title, description, url }: CardProps) {
  return (
    <div className="card sm:bg-pink lg:bg-invert">
      <Image src={thumbnail} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={url}>Click here</Link>
    </div>
  );
}

export type { CardProps };
export { Card };
