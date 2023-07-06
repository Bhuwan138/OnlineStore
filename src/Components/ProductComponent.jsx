import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./ProductComponents.module.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.productReducer.products);
  const filteredProducts = useSelector(
    (state) => state.productReducer.filteredProducts
  );
  const renderProducts = filteredProducts.map((item) => {
    return (
      <div
        className="card my-3 h-100 text-center py-4"
        key={item.id}
        title={item.title}
        style={{ width: "18rem" }}
      >
        <Link className={`${styles.brand}`} to={`products/${item.id}`}>
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            height="250px"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title.substring(0, 20)}</h5>
            <p className="lead">${item.price}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{renderProducts}</div>
      </div>
    </>
  );
};

export default ProductComponent;
