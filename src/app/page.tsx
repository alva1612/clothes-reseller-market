"use client";
import { useModalStore } from "@/modules/modals/state/modal.store";
import {
  ProductCard,
  ProductCardProps,
} from "@/modules/shop/components/ProductCard";
import clsx from "clsx";

const product: ProductCardProps = {
  description: "asas",
  id: "asdasd-asdasd-asdasd-asdad",
  images: [
    "https://hmperu.vtexassets.com/arquivos/ids/3937225/Polo-de-cuello-redondo-Regular-Fit---Verde---H-M-PE.jpg?v=638321869432870000",
  ],
  isFollowed: false,
  name: "Polo",
  prices: {
    normal: "14.89",
  },
  size: "XL",
};
const productB: ProductCardProps = {
  description: "asas",
  id: "asdasd-asdasd-asdasd-asdad",
  images: [
    "https://hmperu.vtexassets.com/arquivos/ids/3937225/Polo-de-cuello-redondo-Regular-Fit---Verde---H-M-PE.jpg?v=638321869432870000",
  ],
  isFollowed: true,
  name: "Polo",
  prices: {
    normal: "14.89",
    sale: "10.89",
  },
  size: "XL",
};

export default function Home() {
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <button onClick={() => toggleModal("registration")}>Registrar</button>
      <div className={clsx("w-full px-default", "grid grid-cols-2 gap-4")}>
        <ProductCard {...product} />
        <ProductCard {...productB} />
      </div>
    </main>
  );
}
