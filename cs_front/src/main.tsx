import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import { BasketContextProvider } from "./Context/BasketContext.tsx";
import { ProductsContextProvider } from "./Context/ProductsContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductsContextProvider>
          <BasketContextProvider>
            <AuthContextProvider>
              <Router />
            </AuthContextProvider>
          </BasketContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
