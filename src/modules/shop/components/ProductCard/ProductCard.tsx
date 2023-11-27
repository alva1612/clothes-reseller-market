import Image from "next/image";
import clsx from "clsx";
import { FC } from "react";
import { IconHeart } from "@/modules/icons";

interface CardPrices {
  normal: string;
  sale?: string;
}

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  images: string[];
  size: string;
  isFollowed: boolean;
  prices: CardPrices;
}

const Prices: FC<CardPrices> = ({ normal, sale }) => {
  return (
    <div
      className={clsx(
        "w-full",
        "flex gap-2",
        "font-bold",
        sale && "justify-end flex-row-reverse"
      )}
    >
      <span className={clsx(sale && "font-light line-through")}>{normal}</span>
      {sale && <span className={clsx("text-highlight")}>{sale}</span>}
    </div>
  );
};

export const ProductCard = ({
  id,
  description,
  images,
  isFollowed,
  name,
  prices,
  size,
}: ProductCardProps) => {
  return (
    <div className={clsx("flex flex-col gap-3 justify-between")}>
      <Image
        src={images[0]}
        alt={id}
        width={160}
        height={200}
        sizes="(min-width: 500px) 200px,
        160px"
        className={clsx("w-full aspect-[5/6]")}
      />
      <div className={clsx("flex flex-col px-2")}>
        <div className={clsx("flex justify-between", "font-bold")}>
          <p>{name}</p>
          <p>{size}</p>
        </div>
        <p className="text-sm">{description}</p>
        <div className={clsx("flex justify-between")}>
          <Prices {...prices} />
          <IconHeart isFollow={isFollowed} />
        </div>
      </div>
    </div>
  );
};
