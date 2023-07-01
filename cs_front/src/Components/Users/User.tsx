import { Button, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BasketContext } from "../../Context/BasketContext";
import { UserType } from "../../API/userType";
import { useMutationUserDelete } from "../../API/queries";
import DeleteIcon from "@mui/icons-material/Delete";

interface singleUserProps {
  singleUser: UserType;
}

export const User = ({ singleUser }: singleUserProps) => {
  const { mutate, isSuccess } = useMutationUserDelete();

  if (isSuccess) return null;
  console.log(singleUser);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {singleUser.firstName}
      </TableCell>
      <TableCell align="right">{singleUser.lastName}</TableCell>
      <TableCell align="right">{singleUser.email}</TableCell>
      <TableCell align="right">
        {singleUser.role === null ? "User" : "Admin"}
      </TableCell>
      <TableCell align="right">
        <Button
          onClick={() => mutate(singleUser.id)}
          disabled={false}
          variant="contained"
          color="error"
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
