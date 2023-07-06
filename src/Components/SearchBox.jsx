import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredProducts,
  setIsFiltered,
} from "../redux/slices/productSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const searchProduct = (e) => {
    const searchValue = e.target.value;

    if (searchValue.trim() === "") {
      dispatch(setFilteredProducts(products));
      dispatch(setIsFiltered(false));
    }
    const filter = products?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch(setFilteredProducts(filter));
    dispatch(setIsFiltered(true));
  };

  return (
    <Form className="d-flex">
      <Form.Control
        onChange={searchProduct}
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
};

export default SearchBox;
