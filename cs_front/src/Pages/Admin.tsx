import { ResponsiveAppBar } from "../Components/Navbar";
import { Divider, Grid, Typography } from "@mui/material";
import { UserTable } from "../Components/Users/UsersTable";
import { ProductTable } from "../Components/Product/ProductTable";
import { AddProduct } from "../Components/Product/AddProduct";

export const Admin = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-2">
      <div className="p-2">
        <ResponsiveAppBar />
      </div>
      <Grid container spacing={2} gap={1} className="p-2 pl-6 p pt-4">
        <Grid item xs={8} className="bg-white rounded-sm flex">
          <div className="p-4">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                pl: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Users
            </Typography>
            <UserTable />
            <Divider className=" py-2" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                pl: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Desserts
            </Typography>
            <ProductTable secondary={true} />
          </div>
        </Grid>
        <Grid item xs={3.9} className="bg-white rounded-sm ml-auto">
          <div className="p-4">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                pl: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Add Product
            </Typography>
            <AddProduct></AddProduct>
          </div>
        </Grid>
      </Grid>

      <footer className="bg-gray-100 py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Quick Website. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};
