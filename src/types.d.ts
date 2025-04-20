interface IImage {
  src: string;
  alt: string;
}

interface IHeroScope {
  title: string;
  subTitle: string;
}

interface IProduct {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
}
