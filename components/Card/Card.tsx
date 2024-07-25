import Image from "next/image";

type CardProps = {
  thumbnailUrl: string;
  title: string;
};

function Card({ thumbnailUrl, title }: CardProps) {
  return (
    <div className="card sm:bg-pink lg:bg-invert">
      <Image src={thumbnailUrl} alt={title} width={300} height={300} />
      <h2>{title}</h2>
    </div>
  );
}

export type { CardProps };
export { Card };
