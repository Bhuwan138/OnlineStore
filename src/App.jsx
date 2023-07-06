import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/Home/NotFound";
import { ReactQueryDevtools } from "react-query/devtools";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
