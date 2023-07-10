import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getUsers } from "../../API/queries";
import { useQuery } from "react-query";
import { User } from "./User";

export const UserTable = () => {
  const { data: usersData } = useQuery(["users"], async () => await getUsers());

  if (!usersData) return null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData &&
            usersData.data.map((user) => (
              <User singleUser={user} key={user.id} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
