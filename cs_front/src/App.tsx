import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ResponsiveAppBar } from "./Components/Navbar";
import { useQuery } from "react-query";
import { getProducts } from "./API/queries";
import { Grid } from "@mui/material";

function App() {
  const { data: products, refetch: refetchProducts } = useQuery(
    ["products"],
    async () => await getProducts()
  );

  useEffect(() => {
    console.log(products?.data);
  }, [products]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="p-2">
        <ResponsiveAppBar />
      </div>

      {/* <main className="container mx-auto py-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold">About Us</h2>
          <p>This is a brief description of our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">Services</h2>
          <ul className="list-disc list-inside">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold">Contact</h2>
          <p>Contact us at example@example.com</p>
        </section>
      </main> */}

      <Grid container spacing={2} className="p-2 pt-4">
        <Grid item xs={8} className="bg-white rounded-sm">
          <div>ayo</div>
        </Grid>
        <Grid item xs={4} className="bg-white rounded-sm">
          <div>Koszyk</div>
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
}

export default App;
