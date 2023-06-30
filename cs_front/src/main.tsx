import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import { BasketContextProvider } from "./Context/BasketContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BasketContextProvider>
          <App />
        </BasketContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
