export interface Product {
  string: id;
  name: string;
  price: string;
  weight: string;
  quantity: number;
}

export interface Products {
  products: Product[];
}
