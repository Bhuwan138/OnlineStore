import "./Cart.module.css";
import { cartAPI } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setCarts } from "../../redux/slices/cartSlice";
import CartData from "./CartData";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

const fetchCart = async () => {
  try {
    const { data } = await axios.get(cartAPI);
    return data;
  } catch (error) {
    throw Error("Unable to fetch products");
  }
};

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

const Cart = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery("carts", fetchCart, {
    onError: (error) => {
      <p> Error Message {error}</p>;
    },
  });

  dispatch(setCarts(data));

  return <div>{isLoading ? <Loading /> : <CartData />}</div>;
};

export default Cart;
