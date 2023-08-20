import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import Product from "../components/Product";

const fashion = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  let query = "";
  if (router.query && router.query.query) query = router.query.query;

  useEffect(() => {
    const fetchProducts = async () => {
      if (query == "") return;
      const url = "http://localhost:4001/api/v1/products/search/" + query;
      console.log(url);
      try {
        const responseData = await axios.get(url);
        const data = responseData.data;
        console.log(data);
        let temp = [];
        for (let i = 0; i < data.length; i++) {
          if (i == 12) break;
          temp.push(data[i]);
        }
        setProducts(temp);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <div>
      <div className="topHeading w-72  ml-5">
        <p
          style={{
            color: "#000",
            fontFamily: "Philosopher",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Home / Clothing / Saree
        </p>
        <h3
          className="ml-3"
          style={{
            color: "#000",
            fontFamily: "Philosopher",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Saree - 10491 items
        </h3>
      </div>
      <div className="flex SizeFilterFullScreen">
        {/* Left Side Filter */}
        <div className="w-1/4  p-4">
          <h3
            className="mb-4"
            style={{
              color: "#000",
              fontFamily: "Biryani",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Filter
          </h3>
          {/* Add your filter options here (combos, size, etc.) */}
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Breadcrumb */}
            <div className="w-72 flex ">
              <div
                className="flex items-center mr-3"
                style={{ border: "2px solid #888", color: "#888" }}
              >
                <label htmlFor="sortBy" className="mr-2"></label>
                <select id="sortBy">
                  <option value="recommendation">Combos</option>
                  {/* Add other sorting options here */}
                </select>
              </div>
              <div
                className="flex items-center"
                style={{ border: "2px solid #888", color: "#888" }}
              >
                <label htmlFor="sortBy" className="mr-2"></label>
                <select id="sortBy">
                  <option value="recommendation">Size</option>
                  {/* Add other sorting options here */}
                </select>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div
              className="flex items-center"
              style={{ border: "2px solid #888", color: "#888" }}
            >
              <label htmlFor="sortBy" className="mr-2">
                Sort by:
              </label>
              <select id="sortBy">
                <option value="recommendation">Recommendation</option>
                {/* Add other sorting options here */}
              </select>
            </div>
          </div>

          {/* Main Content Items */}
          {/* Add your main content items here */}
        </div>
      </div>
      <div className="flex SizeFilterMobileScreen">
        <div className="flex justify-center ml-[200px] mt-[30px]">
          <div className="mr-[10px]">
            <select
              id="sortBy"
              className=" border-[2px] border-gray-400 rounded-[20px] px-[3px]"
            >
              <option value="sortBy">SortBy &nbsp;&nbsp;</option>
              <option value="sortBy">Price 2</option>
              <option value="sortBy">Price 3</option>
              <option value="sortBy">Price 3</option>
              <option value="sortBy">Price 5</option>
            </select>
          </div>
          <div>
            <select
              id="FilterBy"
              className=" border-[2px] border-gray-400 rounded-[20px] px-[2px]"
            >
              <option value="filter">Filter &nbsp; &nbsp;</option>
              <option value="filter">Price</option>
              <option value="filter">Size</option>
              {/* Add other sorting options here */}
            </select>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex">
        {/* Left Div */}
        <div
          className="left-div"
          style={{
            width: "20%",
            height: "1000px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Content for left div */}
          <div
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              color: "#000",
              fontFamily: "Biryani",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <p>CATEGORIES</p>{" "}
              <p
                style={{
                  margin: "5px 0px 0px 0px",
                  color: "#888",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <FaSearch />
              </p>
            </div>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="checkbox" /> Pure Silk Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Semi Silk Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Cotten Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Kanchivaram Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Bandhani Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Organga Saree
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Printed Saree
                </label>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "160px",
              fontFamily: "Biryani",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            <p>PRICE </p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 159 to Rs. 9120(1092)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 9120 to Rs. 18081(339)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 18081 to Rs. 27042(52)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 27042 to Rs. 36003(7)
                </label>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "100px",
              fontFamily: "Biryani",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <p>COLOR</p>{" "}
              <p
                style={{
                  margin: "5px 0px 0px 0px",
                  color: "#888",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
              >
                <FaSearch />
              </p>
            </div>
            <div style={{ marginLeft: "6px", height: "auto" }}>
              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <ellipse cx="9.5" cy="8.5" rx="9.5" ry="8.5" fill="#000" />
                  </svg>
                </div>{" "}
                <div style={{ width: "40px", height: "25px" }}>Black </div>
              </div>
              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <ellipse
                      cx="9.5"
                      cy="8.5"
                      rx="9.5"
                      ry="8.5"
                      fill="#4F93FA"
                    />
                  </svg>
                </div>{" "}
                <div style={{ width: "30px", height: "25px" }}>Blue </div>
              </div>
              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                  marginLeft: "-5px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_26_414)">
                      <ellipse
                        cx="13.5"
                        cy="8.5"
                        rx="9.5"
                        ry="8.5"
                        fill="#F1F1F1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_26_414"
                        x="0"
                        y="0"
                        width="27"
                        height="25"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_26_414"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_26_414"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>{" "}
                <div
                  style={{ width: "30px", height: "25px", marginLeft: "-3px" }}
                >
                  White{" "}
                </div>
              </div>

              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <ellipse
                      cx="9.5"
                      cy="8.5"
                      rx="9.5"
                      ry="8.5"
                      fill="#110076"
                    />
                  </svg>
                </div>{" "}
                <div style={{ width: "30px", height: "25px" }}>Navy </div>
              </div>

              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <ellipse
                      cx="9.5"
                      cy="8.5"
                      rx="9.5"
                      ry="8.5"
                      fill="#04BC43"
                    />
                  </svg>
                </div>{" "}
                <div style={{ width: "30px", height: "25px" }}>Green </div>
              </div>
              <div
                style={{
                  width: "19px",
                  height: "17px",
                  display: "flex",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <ellipse cx="9.5" cy="8.5" rx="9.5" ry="8.5" fill="#F00" />
                  </svg>
                </div>{" "}
                <div style={{ width: "30px", height: "25px" }}>Red </div>
              </div>
            </div>
          </div>
          <h6 style={{ color: "red", marginTop: "70px", marginLeft: "40px" }}>
            + 39 more
          </h6>
          <div
            style={{
              width: "80%",
              height: "100px",
              margin: "auto",
              marginTop: "50px",
              fontFamily: "Biryani",
              fontSize: "17px",
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            <p>DISCOUNT RANGE </p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="radio" />
                  10% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 20% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 30% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 40% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" />
                  50% and above
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Right Div */}
        <div className="right-div w-[80%]">
          <div className="ml-[2rem] mt-[1rem] grid grid-cols-4 gap-4">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default fashion;
