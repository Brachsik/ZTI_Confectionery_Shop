import { Button, TableCell, TableRow } from "@mui/material";
import { ProductType } from "../../API/producType";
import { useContext, useEffect, useState } from "react";
import {
  useMutationEditProduct,
  useMutationProductDelete,
} from "../../API/queries";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductsContext } from "../../Context/ProductsContext";

interface ProductProps {
  product: ProductType;
}

export const AdminProd = ({ product }: ProductProps) => {
  const { mutate: deleteProduct, isSuccess: deleteSuccess } =
    useMutationProductDelete();
  const { mutate: editQuantity, isSuccess: editSuccess } =
    useMutationEditProduct();
  const [internalQuantity, setInternalQUantity] = useState<number>(
    product.quantity
  );
  const productCtx = useContext(ProductsContext);

  useEffect(() => {
    productCtx?.refetchData();
  }, [editSuccess]);

  if (deleteSuccess) return null;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">{product.weight}</TableCell>
      <TableCell align="right">
        <Button
          onClick={() =>
            setInternalQUantity((prevState: number) => prevState - 1)
          }
        >
          -
        </Button>
        {internalQuantity}
        <Button
          onClick={() =>
            setInternalQUantity((prevState: number) => prevState + 1)
          }
        >
          +
        </Button>
      </TableCell>
      <TableCell align="right">{product.price} pln</TableCell>
      <TableCell align="right">
        <div className="flex gap-2 justify-end">
          <Button
            onClick={() =>
              editQuantity({ ...product, quantity: internalQuantity })
            }
            variant="outlined"
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            <DeleteIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
