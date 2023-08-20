import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import Product from "../components/Product";
import ColorBox from "@/components/UIElements/ColorBox";
import Discount from "@/components/UIElements/Discount";
import Price from "@/components/UIElements/Price";

const category = [
  { id: 1, name: "Pure Silk Saree" },
  { id: 2, name: "Semi Silk Saree" },
  { id: 3, name: "Cotton Saree" },
  { id: 4, name: "Kanchivaram Saree" },
  { id: 5, name: "Bandhani Saree" },
  { id: 6, name: "Organga Saree" },
  { id: 7, name: "Printed Saree" },
];

const colorData = [
  { id: 1, name: "Black", col: "black" },
  { id: 2, name: "Blue", col: "blue" },
  { id: 3, name: "White", col: "white" },
  { id: 4, name: "Navy", col: "navy" },
  { id: 5, name: "Green", col: "green" },
  { id: 6, name: "Red", col: "red" },
]

const discountData = [
  { id: 1, discount: 10 },
  { id: 2, discount: 20 },
  { id: 3, discount: 30 },
  { id: 4, discount: 40 },
  { id: 5, discount: 50 },
];

const priceRange = [
  { id: 1, min: 159, max: 3999 },
  { id: 2, min: 4000, max: 9999 },
  { id: 3, min: 10000, max: 19499 },
  { id: 4, min: 19500, max: 29999 },
  { id: 5, min: 30000, max: null },
];

const fashion = () => {
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState();
  const [selectedMaxPrice, setSelectedMaxPrice] = useState();
  const [selectedDiscount, setSelectedDiscount] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const router = useRouter();
  let query = "";
  if (router.query && router.query.query) query = router.query.query;

  const handleCheckboxChange = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const handleColorChange = (color) => {
    if (selectedColor.includes(color)) {
      setSelectedColor(selectedColor.filter((id) => id !== color));
    } else {
      setSelectedColor([...selectedColor, color]);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (query == "") return;
      const url = "http://localhost:4001/api/v1/products/search/" + query;
      // const url = "http://localhost:4001/api/v1/products/get_all_Products";
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

  const categoryFilteredData =
    selectedOptions.length == 0
      ? products
      : products.filter((item) => selectedOptions.includes(item.category));

  const colorFilteredProduct =
    selectedColor.length == 0
      ? categoryFilteredData
      : categoryFilteredData.filter((data) =>
          selectedColor.includes(data.color)
        );

  const discountFilteredProduct = !selectedDiscount
    ? colorFilteredProduct
    : colorFilteredProduct.filter((data) => data.discount > selectedDiscount);

  const priceFilteredProduct = discountFilteredProduct.filter(
    (data) =>
      (!selectedMinPrice ? true : data.offeredPrice >= selectedMinPrice) &&
      (!selectedMaxPrice ? true : data.offeredPrice <= selectedMaxPrice)
  );

  const colorHandler = (color) => {
    setSelectedColor(color);
  };

  const discountHandlers = (off) => {
    setSelectedDiscount(off);
  };

  const priceChangeHandler = (min, max) => {
    setSelectedMinPrice(min);
    setSelectedMaxPrice(max);
  };

  console.log(selectedColor);

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
              {category.map((item) => (
                <label key={item.id} className="block">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(item.name)}
                    onChange={() => handleCheckboxChange(item.name)}
                  />{" "}
                  {item.name}
                </label>
              ))}
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
              {priceRange.map((data) => (
                <Price
                  key={data.id}
                  min={data.min}
                  max={data.max}
                  onClick={priceChangeHandler}
                />
              ))}
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
              {colorData.map((data) => (
                <ColorBox
                  key={data.id}
                  name={data.name}
                  col={data.col}
                  onClick={() => handleColorChange(data.name)}
                />
              ))}
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
              {discountData.map((data) => (
                <Discount
                  key={data.id}
                  discount={data.discount}
                  onClick={discountHandlers}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right Div */}
        <div className="right-div w-[80%]">
          <div className="ml-[2rem] mt-[1rem] grid grid-cols-4 gap-4">
            {priceFilteredProduct.length === 0 ? (
              <h1 className="m-auto">No product found</h1>
            ) : (
              priceFilteredProduct.map((product) => (
                <Product key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default fashion;
