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

interface ProductTableProps {
  products: ProductType[];
}

export const ProductTable = ({ products }: ProductTableProps) => {
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
          {products.map((prod) => (
            <Product product={prod} key={prod.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
