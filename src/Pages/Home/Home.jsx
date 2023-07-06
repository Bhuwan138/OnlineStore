import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setFilteredProducts,
  setProducts,
} from "../../redux/slices/productSlice";
import ProductComponent from "../../Components/ProductComponent";
import Skeleton from "react-loading-skeleton";
import { productAPI } from "../../utils/api";
import CarouselComponent from "../../Components/CarouselComponent";

const Loading = () => {
  return (
    <>
      <div className=" container col-md-12">
        <Skeleton height={200} />
      </div>
      <div className=" container">
        <div className="col-md-3">
          <Skeleton height={400} />
          <Skeleton height={400} />
          <Skeleton height={400} />
          <Skeleton height={400} />
        </div>
      </div>
    </>
  );
};

const fetchProducts = async () => {
  try {
    const { data } = await axios.get(productAPI);
    return data;
  } catch (error) {
    throw Error("Unable to fetch products");
  }
};

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("products", fetchProducts, {
    onError: (error) => {
      <p> Error Message {error}</p>;
    },
  });
  dispatch(setProducts(data));
  dispatch(setFilteredProducts(data));
  return (
    <div>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <CarouselComponent />
          <ProductComponent />
        </>
      )}
    </div>
  );
};

export default Home;
