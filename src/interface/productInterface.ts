export type TProduct = {
  _id: string | number;
  name: string;
  price: number;
  ratings: number;
  description: string;
  thumbnail: string;
  images: string[];
  brand?: string;
  color?: string;
  material?: string;
  weight?: string;
  amazon?: string;
};
