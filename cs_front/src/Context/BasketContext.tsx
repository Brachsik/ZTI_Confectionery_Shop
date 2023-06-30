import { ReactNode, createContext, useEffect, useState } from "react";
import { ProductType, Products } from "../API/producType";

interface BasketContextProps {
  children: ReactNode;
}

export interface BasketItem {
  id: string;
  name: string;
  quantity: number;
}

export interface BasketProps {
  items: ProductType[] | null;
  addItem: (arg0: ProductType) => void;
  deleteItem: (arg0: string) => void;
}

export const BasketContext = createContext<BasketProps | null>(null);

export const BasketContextProvider = ({ children }: BasketContextProps) => {
  const [items, setItems] = useState<ProductType[] | null>(null);

  useEffect(() => {
    if (items) console.log("Basket -> ", items);
  }, [items]);

  const addItem = (prod: ProductType) => {
    if (!items) setItems([{ ...prod, quantity: 1 }]);
    else {
      const item = items.find((item) => item.id === prod.id) || null;

      if (!item) setItems([...items, { ...prod, quantity: 1 }]);
      else
        setItems([
          ...items.filter((item) => item.id !== prod.id),
          { ...prod, quantity: item.quantity + 1 },
        ]);
    }
  };

  const deleteItem = (prodId: string) => {
    const item = items!.find((item) => item.id === prodId);
    if (!item) return;
    if (item?.quantity === 1)
      setItems(items!.filter((item) => item.id !== prodId));
    else
      setItems([
        ...items!.filter((item) => item.id !== prodId),
        { ...item, quantity: item!.quantity - 1 },
      ]);
  };

  return (
    <BasketContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </BasketContext.Provider>
  );
};
