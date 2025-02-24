"use client";
import clsx from "clsx";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "@/i18n/routing";
import { URL } from "@/constants/navigation";

interface IProps {
  products: any[];
  className?: string;
}

export const ProductsList = (props: IProps) => {
  const { push } = useRouter();

  const handleClick = (slug: string) => () => {
    push(URL.PRODUCT.replace("[slug]", slug));
  };

  return (
    <ul className={clsx("grid gap-4 grid-cols-2", props.className)}>
      {props.products.map((product) => (
        <li key={product.title}>
          <ProductCard
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            onClick={handleClick(product.slug)}
          />
        </li>
      ))}
    </ul>
  );
};
