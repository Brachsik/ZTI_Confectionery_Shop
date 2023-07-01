export interface ProductType {
  id: string;
  name: string;
  price: string;
  weight: string;
  quantity: number;
}

export interface ProductTypeCreate {
  name: string;
  price: number;
  weight: string;
  quantity: number;
}

export interface Products {
  products: ProductType[];
}
