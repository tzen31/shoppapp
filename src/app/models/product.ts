import { Category } from "./category";

export interface Product {
  _id: string,
  slug?: string,
  name: string;
  description: string,
  additional_info?: string,
  vendor_info?: string,
  review?: string,
  color: string[],
  size?: string[],
  stock?: string,
  categories: Category[],
  imageUrl: string[],
  sold_price: number,
  regular_price: number,
  created_at: Date,
  updated_at?: Date,
}
