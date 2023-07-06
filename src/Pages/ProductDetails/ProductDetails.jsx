import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../redux/slices/productSlice";
import SelectedProduct from "../../Components/SelectedProduct";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { productAPI } from "../../utils/api";

const Loading = () => {
  return (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
      </div>
    </>
  );
};

const fetchSelectedProduct = async (productId) => {
  try {
    const { data } = await axios.get(`${productAPI}/${productId}`);
    return data;
  } catch (error) {
    throw Error("Unable to fetch products");
  }
};

const ProductDetails = () => {
  const id = useParams();
  const productId = parseInt(id.productId);
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery(
    "product",
    () => fetchSelectedProduct(productId),
    {
      onError: (error) => {
        <p> Error Message {error}</p>;
      },
    }
  );
  dispatch(setSelectedProduct(data));
  return (
    <div className="container py-5">
      <div className="row py-4">
        {isLoading ? <Loading /> : <SelectedProduct />}
      </div>
    </div>
  );
};

export default ProductDetails;
