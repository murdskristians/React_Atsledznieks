import Image from "next/image";

interface IProps {
  title: string;
  imageUrl: string;
}

export const CategoryCard = (props: IProps) => (
  <div className="transition-opacity relative flex flex-col justify-end p-4 h-52 overflow-hidden rounded-3xl hover:opacity-70 cursor-pointer">
    <div className="absolute inset-0 -z-10 bg-neutral-900/40" />
    <Image
      fill
      alt={props.title}
      src={props.imageUrl}
      className="-z-20"
      style={{ objectFit: "cover" }}
    />
    <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
      {props.title}
    </h3>
  </div>
);
