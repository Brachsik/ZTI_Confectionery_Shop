import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CartProduct } from "./CartProduct";
import { useContext } from "react";
import { BasketContext } from "../../Context/BasketContext";

export const CartTable = () => {
  const basketCtx = useContext(BasketContext);

  if (!basketCtx?.items) return <h1>Basket is empty</h1>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basketCtx.items.map((prod) => (
            <CartProduct product={prod} key={prod.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
