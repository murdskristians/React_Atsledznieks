import Image from "next/image";

interface IProps {
  title: string;
  imageUrl: string;
  price: number;
  onClick: VoidFunction;
}

export const ProductCard = (props: IProps) => {
  return (
    <article
      className="cursor-pointer flex flex-col gap-4 bg-white rounded-3xl pb-4 h-full overflow-hidden hover:opacity-70 transition-opacity"
      onClick={props.onClick}
    >
      <div className="relative w-full h-32 md:h-60">
        <Image
          fill
          src={props.imageUrl}
          alt={props.title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="px-4 grow">{props.title}</h3>
      <p className="px-4 font-medium text-xl">€{props.price}</p>
    </article>
  );
};
