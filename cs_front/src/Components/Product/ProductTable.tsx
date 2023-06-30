import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ProductType } from "../../API/producType";
import { Product } from "./Product";
import { useContext } from "react";
import { ProductsContext } from "../../Context/ProductsContext";

interface ProductTableProps {
  products?: ProductType[];
}

export const ProductTable = ({ products }: ProductTableProps) => {
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
          {productsCtx.products.map((prod) => (
            <Product product={prod} key={prod.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
