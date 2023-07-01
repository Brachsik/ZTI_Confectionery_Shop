import { Button, TableCell, TableRow } from "@mui/material";
import { ProductType } from "../../API/producType";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BasketContext } from "../../Context/BasketContext";

interface ProductProps {
  product: ProductType;
  secondary?: boolean;
}

export const Product = ({ product, secondary }: ProductProps) => {
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);
  let findInBasket;
  if (basketCtx)
    findInBasket = basketCtx.items?.find((item) => item.name === product.name);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.weight}</TableCell>
      <TableCell align="right">
        {product.quantity - (findInBasket?.quantity || 0)}
      </TableCell>
      <TableCell align="right">{product.price} pln</TableCell>
      <TableCell align="right">
        {!secondary && (
          <Button
            onClick={() => basketCtx?.addItem(product)}
            disabled={
              authCtx?.id === null || !basketCtx?.canBeAdded(product.id)
            }
            variant="contained"
          >
            Add to Cart
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
