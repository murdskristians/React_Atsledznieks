import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const CategoryCard = ({ 
  title, 
  imageUrl, 
  isSelected = false, 
  onClick 
}: CategoryCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`transition-opacity relative flex flex-col justify-end p-4 h-52 overflow-hidden rounded-3xl hover:opacity-70 cursor-pointer ${
        isSelected ? 'ring-4 ring-blue-500' : ''
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-neutral-900/40" />
      <Image
        fill
        alt={title}
        src={imageUrl}
        className="-z-20"
        style={{ objectFit: "cover" }}
      />
      <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
        {title}
      </h3>
      {isSelected && (
        <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">✓</span>
        </div>
      )}
    </div>
  );
};
