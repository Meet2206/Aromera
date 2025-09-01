export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  scentFamily: string;
  volume: string;
  ingredients: string[];
  isOrganic: boolean;
  isNew: boolean;
  isBestSeller: boolean;
}

export interface ScentFamily {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}