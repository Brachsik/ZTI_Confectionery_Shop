import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.tsx";
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
        <AuthContextProvider>
          <ProductsContextProvider>
            <BasketContextProvider>
              <Router />
            </BasketContextProvider>
          </ProductsContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
