import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "./Product";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { AdminProd } from "../AdminProd/AdminProd";

interface ProductTableProps {
  secondary?: boolean;
}

export const ProductTable = ({ secondary }: ProductTableProps) => {
  const productsCtx = useContext(ProductsContext);

  if (!productsCtx || !productsCtx.products) return null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell align="right">Weigth</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!secondary
            ? productsCtx.products
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((prod) => <Product product={prod} key={prod.id} />)
            : productsCtx.products
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((prod) => <AdminProd product={prod} key={prod.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
