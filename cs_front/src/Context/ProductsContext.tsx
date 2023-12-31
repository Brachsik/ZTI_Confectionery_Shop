import { ReactNode, createContext, useEffect, useState } from "react";
import { ProductType } from "../API/producType";
import { getProducts } from "../API/queries";
import { useQuery } from "react-query";

interface ProductsContextProps {
  children: ReactNode;
}

export interface ProductsItem {
  id: string;
  name: string;
  quantity: number;
}

export interface ProductsProps {
  products: ProductType[] | null;
  refetchData: () => void;
}

export const ProductsContext = createContext<ProductsProps | null>(null);

export const ProductsContextProvider = ({ children }: ProductsContextProps) => {
  const [products, setItems] = useState<ProductType[] | null>(null);

  const { data: productsData, refetch } = useQuery(
    ["products"],
    async () => await getProducts()
  );

  const refetchData = () => refetch();

  useEffect(() => {
    if (productsData?.data)
      setItems(
        productsData.data.sort((a, b) => {
          const nameA = a.name.toUpperCase() || "a";
          const nameB = b.name.toUpperCase() || "b";

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
  }, [productsData]);

  return (
    <ProductsContext.Provider value={{ products, refetchData }}>
      {children}
    </ProductsContext.Provider>
  );
};
