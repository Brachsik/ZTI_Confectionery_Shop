import { Button, TableCell, TableRow } from "@mui/material";
import { ProductType } from "../../API/producType";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BasketContext } from "../../Context/BasketContext";

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.weight}</TableCell>
      <TableCell align="right">{product.quantity}</TableCell>
      <TableCell align="right">{product.price} pln</TableCell>
      <TableCell align="right">
        <Button
          onClick={() => basketCtx?.addItem(product)}
          disabled={authCtx?.id === null || !basketCtx?.canBeAdded(product.id)}
          variant="contained"
        >
          Add to Cart
        </Button>
      </TableCell>
    </TableRow>
  );
};
