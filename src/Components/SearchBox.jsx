import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../redux/slices/productSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const searchProduct = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") dispatch(setFilteredProducts(products));

    const filter = products?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch(setFilteredProducts(filter));
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
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBox;
