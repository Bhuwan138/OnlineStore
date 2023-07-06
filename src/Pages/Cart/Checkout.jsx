import { MDBBtn, MDBCol, MDBInput, MDBTypography } from "mdb-react-ui-kit";

const Checkout = () => {
  return (
    <MDBCol lg="4" className="bg-grey">
      <div className="p-5">
        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
          Summary
        </MDBTypography>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-4">
          <MDBTypography tag="h5" className="text-uppercase">
            items 3
          </MDBTypography>
          <MDBTypography tag="h5">€ 132.00</MDBTypography>
        </div>

        <MDBTypography tag="h5" className="text-uppercase mb-3">
          Shipping
        </MDBTypography>

        <div className="mb-4 pb-2">
          <select
            className="select p-2 rounded bg-grey"
            style={{ width: "100%" }}
          >
            <option value="1">Standard-Delivery- €5.00</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </div>

        <MDBTypography tag="h5" className="text-uppercase mb-3">
          Give code
        </MDBTypography>

        <div className="mb-5">
          <MDBInput size="lg" label="Enter your code" />
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-5">
          <MDBTypography tag="h5" className="text-uppercase">
            Total price
          </MDBTypography>
          <MDBTypography tag="h5">€ 137.00</MDBTypography>
        </div>

        <MDBBtn color="dark" block size="lg">
          Checkout
        </MDBBtn>
      </div>
    </MDBCol>
  );
};

export default Checkout;
