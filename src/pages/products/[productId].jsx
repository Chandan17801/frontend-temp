import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import img from "../../assets/img3.jpeg";
import axios from "axios";
import {
  FaHeart,
  FaShare,
  FaRupeeSign,
  FaCartArrowDown,
  FaBuyNLarge,
} from "react-icons/fa";

const products = () => {
  const [product, setProduct] = useState({});
  const {
    query: { productId },
  } = useRouter();

  const percent_Calc = (originalPrice, discountedPrice) => {
    if (
      originalPrice <= 0 ||
      discountedPrice <= 0 ||
      discountedPrice >= originalPrice
    ) {
      return 0; // Invalid input or no discount
    }

    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    return Math.round(discountPercentage);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/v1/products/product/${productId}`
        );
        setProduct(data);
      } catch (error) {
        console.warn(error);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div>
      <div className="md:m-5">
        <div className="md:w-full">
          <div className=" border-2 flex md:pr-8 py-3.5 md:pl-8 justify-center">
            <div className=" flex-col items-center">
              <img
                src={"http://localhost:4001/files/" + product.mainImage}
                layout="responsive"
                className="h-[30rem]"
                alt="picture of the saree"
              ></img>
            </div>
            <div className=" mt-3 md:pl-3">
              <span className="text-red-500">
                <FaHeart />
              </span>
              <span className="text-purple-500">
                <FaShare />
              </span>
            </div>
          </div>

          <div className="ml-10 mt-4 md:flex md:justify-center">
            <button className="flex bg-yellow-200 p-2 m-1">
              <span className="pl-1">
                <FaCartArrowDown />
              </span>
              <span className="pr-1 text-xs">ADD TO CART</span>
            </button>

            <button className=" flex bg-orange-200 p-2 m-1">
              <span className="pl-1 text-xs">
                <FaBuyNLarge />
              </span>
              <span className="pr-1 text-xs">Buy Now</span>
            </button>
          </div>
        </div>
        <div className="pl-4 md:pl-8 mt-4">
          <h1>
            {product.productName} <br />
            <b>
              {product.productType} ({product.color})
            </b>
          </h1>
          <h3 className="text-yellow-400 font-black">SPECIAL PRICE</h3>
          <div className=" flex mt-4  ">
            <div className="flex mr-7">
              <span className="">
                <FaRupeeSign className="mt-[6px] text-sm text-gray-600" />
              </span>
              <span className="text-gray-600">{product.mrp}</span>
            </div>

            <div className="flex mr-7">
              <span className="">
                <FaRupeeSign className="mt-[6px] text-sm" />
              </span>
              <span>{product.offeredPrice}</span>
            </div>

            <span>{`${percent_Calc(
              product.mrp,
              product.offeredPrice
            )}%OFF`}</span>
          </div>

          <div className="flex items-center">
            {/* <div className="flex bg-green-500 h-8  w-17 mr-10 text-white rounded-full items-center justify-center">
              <span className="ml-2">
                <FaStar />
              </span>

              <div className="mr-2">5.6</div>
            </div> */}
            <div>25,245 RATINGS AND 1,357 REVIEWS</div>
          </div>

          <div className="mb-10">
            <p>Color:</p>
          </div>

          <div className="mb-16">
            AVAILABLE OFFERS
            <div>
              <li>
                <b>SPECIAL PRICE</b> GET EXTRA 10% OFF(PRICE INCLUSIVE OF
                CASHBACK/COUPON)
              </li>
              <li>
                <b>SPECIAL PRICE</b> GET EXTRA 10% OFF(PRICE INCLUSIVE OF
                CASHBACK/COUPON)
              </li>
              <li>
                <b>SPECIAL PRICE</b> GET EXTRA 10% OFF(PRICE INCLUSIVE OF
                CASHBACK/COUPON)
              </li>
              <li>
                <b>SPECIAL PRICE</b> GET EXTRA 10% OFF(PRICE INCLUSIVE OF
                CASHBACK/COUPON)
              </li>
            </div>
          </div>

          <div className="flex">
            <div>
              <p>Deliver To</p>
            </div>
            <div className="ml-4">
              <u>ENTER YOUR LOCATION &nbsp;&nbsp;&nbsp;Check</u>
            </div>
            <div className="flex ml-4">
              <span>
                <FaRupeeSign />
              </span>
              <span> Cash On delivery?</span>
            </div>
          </div>
          <div className="ml-20">
            Delivery By 18 August, Monday FREE 50 Rs <br />
            If ordered before 1:30 <br />
            <a href="#" className="text-blue-300">
              View Details
            </a>
          </div>
          <div className="mt-12 ">
            <h1>
              <u> Product Details </u>
            </h1>
            <div className="mb-10">
              <li>Collection: Khusi</li>
              <li>Material: Silk With Viscose</li>
              <li>Pattern:Printed, Fancy Border</li>
              <li>Length: 5.6 Mtr Saree + 0.85 Mtr Blouse</li>
              <li>Width: 112/114 cm</li>
              <li>
                Wash Care: Normal Wash, Do Not Bleach, Normal Tumble Dry. Normal
                Iron
              </li>
            </div>
          </div>

          <div className="flex mb-20">
            <div>
              <span>
                <h1>
                  <u>Review and Ratings</u>
                </h1>
              </span>
            </div>
            {/* <div className="flex ml-9 mr-9 bg-green-500 text-white rounded-b-md rounded-t-md">
              <span className="ml-2">
                <FaStar />
              </span>
              <span className="mr-2">5.6</span>
            </div> */}
            <span className=""> (23 REVIEWS & 213 RATINGS)</span>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="mt-5">
              <h2 className="text-center">Images:</h2>
            </div>
            <div className="flex pr-8 py-3.5 pl-8 items-center">
              <div className="mx-1">
                <Image
                  src={img}
                  width={100}
                  height={50}
                  alt="picture of the saree"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={img}
                  width={100}
                  height={50}
                  alt="picture of the saree"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={img}
                  width={100}
                  height={50}
                  alt="picture of the saree"
                />
              </div>
              <div className="mx-2">
                <Image
                  src={img}
                  width={100}
                  height={50}
                  alt="picture of the saree"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex">
              <h2>JENNY</h2>
              {/* <div className="flex ml-9 mr-9 bg-green-500 text-white rounded-b-md rounded-t-md">
                <span className="ml-2">
                  <FaStar />
                </span>
                <span className="mr-2">5.6</span>
              </div> */}
              <span>12 OCT 2022</span>
            </div>

            <div className="flex items-center justify-center mb-12">
              <div className="mt-5">
                <h2 className="text-center">
                  THE PRODUCT IS LIGHTWEIGHT AND AFFORDABLE
                </h2>
              </div>
              <div className="flex pr-8 py-3.5 pl-8 items-center">
                <div className="mx-1">
                  <Image
                    src={img}
                    width={100}
                    height={50}
                    alt="picture of the saree"
                  />
                </div>
              </div>
            </div>

            <hr />
          </div>
          <div>
            <div className="flex">
              <h2>ESHA</h2>
              {/* <div className="flex ml-9 mr-9 bg-green-500 text-white rounded-b-md rounded-t-md">
                <span className="ml-2">
                  <FaStar />
                </span>
                <span className="mr-2">5.6</span>
              </div> */}
              <div>12 OCT 2022</div>
            </div>

            <div className="flex items-center justify-center mb-12">
              <div className="mt-5">
                <h2 className="text-center">
                  THE PRODUCT IS LIGHTWEIGHT AND AFFORDABLE
                </h2>
              </div>
              <div className="flex pr-8 py-3.5 pl-8 items-center">
                <div className="mx-1">
                  <Image
                    src={img}
                    width={100}
                    height={50}
                    alt="picture of the saree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default products;
