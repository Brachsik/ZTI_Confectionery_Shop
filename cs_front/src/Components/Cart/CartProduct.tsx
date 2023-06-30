import { Button, TableCell, TableRow } from "@mui/material";
import { ProductType } from "../../API/producType";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BasketContext } from "../../Context/BasketContext";

interface ProductProps {
  product: ProductType;
}

export const CartProduct = ({ product }: ProductProps) => {
  const authCtx = useContext(AuthContext);
  const basketCtx = useContext(BasketContext);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.quantity}</TableCell>
      <TableCell align="right">
        {Number(product.price) * product.quantity} pln
      </TableCell>
      <TableCell align="right">
        <Button
          onClick={() => basketCtx?.deleteItem(product.id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
