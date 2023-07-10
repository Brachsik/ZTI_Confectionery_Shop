import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../API/producType";
import { ProductsContext } from "./ProductsContext";

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
  canBeAdded: (arg0: string) => boolean;
  clearBasket: () => void;
}

export const BasketContext = createContext<BasketProps | null>(null);

export const BasketContextProvider = ({ children }: BasketContextProps) => {
  const [items, setItems] = useState<ProductType[]>([]);

  const productsCtx = useContext(ProductsContext);

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

  const canBeAdded = (prodId: string) => {
    const itemInCart = items?.find((item) => item.id === prodId);
    if (!items || !itemInCart) return true;
    else {
      if (productsCtx !== undefined && productsCtx?.products) {
        return (
          productsCtx.products.find((product) => product.id === prodId)!
            .quantity > itemInCart.quantity
        );
      }
      return false;
    }
  };

  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{ items, addItem, deleteItem, canBeAdded, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
