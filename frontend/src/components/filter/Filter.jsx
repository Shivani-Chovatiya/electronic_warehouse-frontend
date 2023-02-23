import React, { useEffect, useState } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { searchProduct } from "../../action/productAction";
import Catagories from "../catagory/Catagories";
import Rating from "../product/Rating";

const Filter = ({ product, cat }) => {
  // const [data, setData] = useState(Catagories);
  // const filterResult = (cartItem) => {
  //   const result = Catagories.filter((curData) => {
  //     return curData.catagory === cartItem;
  //   });
  //   setData(result);
  // };

  // return (
  //   <div className="filter-row">
  //     <div className="filter-col">
  //       <div className="filter-group">
  //         <button onClick={() => setData(Catagories)}>All</button>
  //         <button onClick={() => filterResult("Mobile")}>Mobile</button>
  //         <button onClick={() => filterResult("Laptop")}>Laptop</button>
  //       </div>
  //       <div className="filter-group">
  //         <input type="search" placeholder="Search..." />
  //         <button>
  //           <i className=" fa-solid fa-search"></i>
  //         </button>
  //       </div>
  //     </div>
  //     <div className="filter-col">
  //       <div className="filter-cards">
  //         {/* <div className="filter-card">
  //           <div className="card-header">
  //             <img src="./assets/images/product/2.jpg" alt=" " />

  //             <Nav.Link href="/">
  //               <img
  //                 className="card-sellers"
  //                 src="./assets/images/seller/1.jpg"
  //                 alt=""
  //               />
  //             </Nav.Link>
  //           </div>

  //           <div className="card-body">
  //             <Nav.Link href="/product:id">
  //               Redmi Note 10T 5G
  //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
  //             </Nav.Link>
  //             <span className="category">Mobile</span>
  //             <span className="price">₹15,000</span>
  //           </div>
  //           <div className="card-footer">
  //             <button>Add to Cart</button>
  //           </div>
  //         </div> */}

  //         {data.map((values) => {
  //           //const [id, title, price, image] = values;
  //           return (
  //             <>
  //               <div className="filter-card" key={values.id}>
  //                 <div className="card-header">
  //                   <img src={values.image} alt=" " />
  //                   {/* <Nav.Link href="/">
  //               <img
  //                 className="card-sellers"
  //                 src="./assets/images/seller/2.jpg"
  //                 alt=""
  //               />
  //             </Nav.Link> */}
  //                 </div>

  //                 <div className="card-body">
  //                   <Nav.Link href="/">
  //                     {/* 11th Gen Intel i5 */}
  //                     {values.title}
  //                     <i className="fa-sharp fa-solid fa-bag-shopping"></i>
  //                   </Nav.Link>
  //                   {/* <span className="category">Laptop</span> */}
  //                   <span className="price">₹{values.price}</span>
  //                 </div>
  //                 <div className="card-footer">
  //                   <button>Add to Cart</button>
  //                 </div>
  //               </div>
  //             </>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );

  const history = useHistory();
  const redirectpage = () => {
    history.push("/allproducts");
  };
  // useEffect(() => {
  //   const getdata = async () => {
  //     const resp = await fetch("http://localhost:8002/product/");
  //     const getproduct = await resp.json();
  //     setProduct(getproduct);
  //     console.log(getproduct);
  //   };
  //   getdata();
  // });

  // const [data, setData] = useState(Catagories);
  // const filterResult = (cartItem) => {
  //   const result = Catagories.filter((curData) => {
  //     return curData.catagory === cartItem;
  //   });
  //   setData(result);
  // };
  const [catagory, setCatagory] = useState([]);
  const filterResult = (cartItem) => {
    const getdata = async () => {
      const resp = await fetch(`http://localhost:8001/product/${cartItem}/`);
      const getproduct = await resp.json();
      setCatagory(getproduct);
      //  console.log(getproduct);
    };
    getdata();
  };
  //console.log(catagory.length);

  // const [product, setProduct] = useState([]);

  // const allproducts = () => {
  //   catagory.length = 0;
  //   const getdata = async () => {
  //     const resp = await fetch("http://localhost:8001/product/");
  //     const getproduct = await resp.json();
  //     setProduct(getproduct);
  //     console.log(getproduct);
  //   };
  //   getdata();
  // };
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");

  return (
    <div className="filter-row">
      <div className="filter-col">
        {/* <div className="filter-group">
          <Button>All</Button>
          <Button onClick={() => filterResult("mobile")}>Mobile</Button>
          <Button onClick={() => filterResult("laptop")}>Laptop</Button>
        </div> */}
        <div className="filter-group">
          <input
            type="search"
            placeholder="Search..."
            value={searchkey}
            onChange={(e) => setsearchkey(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(searchProduct(searchkey));
            }}
          >
            <i className=" fa-solid fa-search"></i>
          </Button>
        </div>
      </div>
      <div className="filter-col">
        <div className="filter-cards">
          {/* {catagory.length === 0 ? ( */}
          {product ? (
            // <div>
            //   {product?.map((values) => {
            //     return (
            //       <>
            //         <div className="filter-card">
            //           <div className="card-header" key={values.id}>
            //             <Nav.Link href={`product/${values.id}`}>
            //               <img src={values.image} alt=" " />
            //             </Nav.Link>
            //           </div>

            //           <div className="card-body">
            //             <Nav.Link href={`product/${values.id}`}>
            //               {values.title}
            //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
            //             </Nav.Link>
            //             <span className="category">{values.catagory}</span>
            //             <span className="price">₹{values.price}</span>
            //             <Rating value={values.rating} />
            //           </div>
            //         </div>
            //       </>
            //     );
            //   })}
            // </div>
            <>
              <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product.id}`}>
                  <Card.Img src={product.image} variant="top" />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product.id}`}>
                    <Card.Title as="div">
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <Rating
                      value={product.rating}
                      // text={`${product.numReviews} reviews`}
                    />
                    {/* <div className='my-3'>
                  {product.rating} from {product.numReviews}
                  </div> */}
                  </Card.Text>
                  <Card.Text as="div">₹{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </>
          ) : (
            // <div>
            //   {catagory?.map((values) => {
            //     return (
            //       <>
            //         <div className="filter-card">
            //           <div className="card-header" key={values.id}>
            //             <Nav.Link href={`product/${values.id}`}>
            //               <img src={values.image} alt=" " />
            //             </Nav.Link>
            //           </div>

            //           <div className="card-body">
            //             <Nav.Link href={`product/${values.id}`}>
            //               {values.title}
            //               <i className="fa-sharp fa-solid fa-bag-shopping"></i>
            //             </Nav.Link>
            //             <span className="category">{values.catagory}</span>
            //             <span className="price">₹{values.price}</span>
            //             <Rating value={values.rating} />
            //           </div>
            //         </div>
            //       </>
            //     );
            //   })}
            // </div>

            <>
              <Card className="my-3 p-3 rounded">
                <Link to={`/product/${cat.id}`}>
                  <Card.Img src={cat.image} variant="top" />
                </Link>
                <Card.Body>
                  <Link to={`/product/${cat.id}`}>
                    <Card.Title as="div">
                      <strong>{cat.name}</strong>
                    </Card.Title>
                  </Link>
                  <Card.Text as="div">
                    <Rating
                      value={cat.rating}
                      // text={`${product.numReviews} reviews`}
                    />
                    {/* <div className='my-3'>
                  {product.rating} from {product.numReviews}
                  </div> */}
                  </Card.Text>
                  <Card.Text as="div">₹{cat.price}</Card.Text>
                </Card.Body>
              </Card>
            </>
          )}
          {/* {catagory?.map((values) => {
            return (
              <>
                <div className="filter-card" key={values.id}>
                  <div className="card-header">
                    <Nav.Link href={`product/${values.id}`}>
                      <img src={values.image} alt=" " />
                    </Nav.Link>
                  </div>

                  <div className="card-body">
                    <Nav.Link href={`product/${values.id}`}>
                      {values.title}
                      <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                    </Nav.Link>
                    <span className="category">{values.catagory}</span>
                    <span className="price">₹{values.price}</span>
                  </div>
                </div>
              </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
