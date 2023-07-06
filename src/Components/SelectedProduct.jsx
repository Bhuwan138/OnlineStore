import styles from "./SelectedProduct.module.css";
import { useSelector } from "react-redux";

const SelectedProduct = () => {
  const selectedProduct = useSelector(
    (state) => state.productReducer.selectedProduct
  );
  return (
    <>
      <div className="col-lg-6 col-md-7 text-center">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          height="400rem"
          width="400rem"
        />
      </div>
      <div className="col-lg-6 col-md-5 mx-auto">
        <h4 className="text-uppercase text-black-50">
          {" "}
          {selectedProduct.category}{" "}
        </h4>
        <h1 className="display-5"> {selectedProduct.title} </h1>
        <p className="lead fw-bolder">
          Rating {selectedProduct.rating && selectedProduct.rating.rate}{" "}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">$ {selectedProduct.price}</h3>
        <p className="lead text-justify">{selectedProduct.description}</p>
        <button className="btn btn-outline-dark px-4 py-2">Add To Cart</button>
      </div>
    </>
  );
};

export default SelectedProduct;
