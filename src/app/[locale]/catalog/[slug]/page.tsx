import { ALL_PRODUCTS } from "@/constants/products";
import { ProductPage } from "@/routes/ProductPage";
import { notFound } from "next/navigation";

interface IProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function Product(props: IProps) {
  const product = ALL_PRODUCTS.find(
    (product) => product.slug === props.params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <ProductPage product={product} />
    </div>
  );
}
