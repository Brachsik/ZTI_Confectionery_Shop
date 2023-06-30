import { ReactNode, createContext, useState } from "react";
import { Product } from "../API/producType";

interface BasketContextProps {
  children: ReactNode;
}

export interface BasketItem {
  id: string;
  name: string;
  quantity: number;
}

export interface BasketProps {
  items: BasketItem[] | null;
}

export const BasketContext = createContext<BasketProps | null>(null);

export const BasketContextProvider = ({ children }: BasketContextProps) => {
  const [items, setItems] = useState<BasketItem[] | null>(null);

  const addItem = (prod: Product) => {
    if (!items) setItems([{ ...prod }]);
    else {
      const item = items.find((item) => item.id === prod.id) || null;

      if (!item) setItems([...items, { ...prod }]);
      else
        setItems([
          ...items.filter((item) => item.id !== prod.id),
          { id: prod.id, name: prod.name, quantity: item.quantity + 1 },
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
        { id: item!.id, name: item!.name, quantity: item!.quantity - 1 },
      ]);
  };

  return (
    <BasketContext.Provider value={{ items }}>
      {children}
    </BasketContext.Provider>
  );
};
