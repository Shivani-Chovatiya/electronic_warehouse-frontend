// import React, { useEffect, useState } from "react";
// import { Button, Form, Nav } from "react-bootstrap";
// import CheckOut from "../checkout/CheckOut";
// import { withRouter, Redirect } from "react-router-dom";
// import FormContainer from "../checkout/FormContainer";

// const ShippingAddress = ({ history }) => {
//   const initialValues = {
//     mobile_no: "",
//     address: "",
//     city: "",
//     postalcode: "",
//     country: "",
//   };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     //console.log(formValues);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//     //dispatch
//     //dispatch(login(email, password));
//     history.push("/payment");
//     // <Redirect to="/payment" />;
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (!values.address) {
//       errors.address = "Address is required";
//     }
//     if (!values.city) {
//       errors.city = "City name is required";
//     }

//     if (!values.postalcode) {
//       errors.postalcode = "Postal code is required";
//     } else if (values.postalcode.length < 6) {
//       errors.postalcode = "Postal code is must be 6 characters";
//     } else if (values.postalcode.length > 6) {
//       errors.postalcode = "Postal code is must be 6 characters";
//     }

//     if (!values.country) {
//       errors.country = "Country name is required";
//     }

//     if (!values.mobile_no) {
//       errors.mobile_no = "Mobile No. is required";
//     } else if (values.mobile_no.length < 10) {
//       errors.mobile_no = "Mobile No. must be 10 characters";
//     } else if (values.mobile_no.length > 10) {
//       errors.mobile_no = "Mobile No. must be 10 characters";
//     }

//     return errors;
//   };

//   return (
//     <>
//       <CheckOut step1 step2 />
//       <FormContainer>
//         <h2 className="mb-5">Shipping Address</h2>
//         <Form onSubmit={submitHandler}>
//           <Form.Group className="mb-3" controlId="mobile_no">
//             <Form.Label>Mobile No.</Form.Label>
//             <Form.Control
//               name="mobile_no"
//               type="text"
//               placeholder="enter mobile no. "
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>
//           <p>{formErrors.mobile_no}</p>
//           <Form.Group className="mb-3" controlId="address">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               name="address"
//               type="text"
//               placeholder="Enter Address"
//               value={formValues.address}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>
//           <p>{formErrors.address}</p>
//           <Form.Group className="mb-3" controlId="city">
//             <Form.Label>City</Form.Label>
//             <Form.Control
//               name="city"
//               type="text"
//               placeholder="Enter City"
//               value={formValues.city}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>
//           <p>{formErrors.city}</p>
//           <Form.Group className="mb-3" controlId="postalcode">
//             <Form.Label>Postal Code</Form.Label>
//             <Form.Control
//               name="postalcode"
//               type="text"
//               placeholder="Enter postalcode"
//               value={formValues.postalcode}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>
//           <p>{formErrors.postalcode}</p>
//           <Form.Group className="mb-3" controlId="country">
//             <Form.Label>Country</Form.Label>
//             <Form.Control
//               name="country"
//               type="text"
//               placeholder="Enter Country"
//               value={formValues.country}
//               onChange={handleChange}
//             ></Form.Control>
//           </Form.Group>
//           <p>{formErrors.country}</p>
//           {/* <div>
//             <Nav.Link href="/payment">
//               <button>continue</button>
//             </Nav.Link>

//           </div> */}

//           <Button
//             type="submit"
//             variant="primary"
//             // onChange={() => history.push("/payment")}
//           ></Button>
//           <Nav.Link href="/payment">continue</Nav.Link>
//         </Form>
//       </FormContainer>
//     </>
//   );
// };

// export default withRouter(ShippingAddress);

import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createHashHistory } from "history";
import CheckOut from "../checkout/CheckOut";
import FormContainer from "../checkout/FormContainer";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../action/cartAction";

const ShippingAddress = () => {
  const dispatch = useDispatch();

  // const shipping = useSelector((state) => state.shipping);
  // const { shippingAddress } = shipping;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  //console.log(shippingAddress);

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [mobileno, setMobileNo] = useState(shippingAddress.mobileno);
  const [addid, setAddId] = useState(shippingAddress.addid);

  let history = useHistory();
  // useEffect(() => {
  //   if (shippingAddress) {
  //     history.push("/shipping");
  //   }
  // }, [history, shippingAddress]);
  // const history = createHashHistory();
  // const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        addid,
        mobileno,
        address,
        city,
        postalcode,
        country,
      })
    );
    history.push("/payment");
  };

  return (
    <>
      <CheckOut step1 step2 />
      <FormContainer>
        <h2 className="mb-5">Shipping Address</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="shippingid">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="number"
              value={addid}
              placeholder="enter Id "
              onChange={(e) => setAddId(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="mobile_no">
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control
              type="text"
              value={mobileno}
              placeholder="enter mobile no. "
              onChange={(e) => setMobileNo(e.target.value)}
              pattern="[1-9]{1}[0-9]{9}"
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalcode">
            <Form.Label>PostalCode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postalcode"
              value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button className="mb-3" type="submit" variant="primary">
            continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ShippingAddress;
