import React, { useState, useEffect } from "react";
import { useHttpClient } from "@/hooks/http-hook";
import Image from "next/image";
import Image1 from "../../assets/images1.png";

function OurProduct() {
  const [products, setProducts] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          "/products/get_all_Products",
          "get"
        );
        console.log(responseData);
        let temp = [];
        for (let i = 0; i < responseData.data.length; i++) {
          if (i == 8) break;
          temp.push(responseData.data[i]);
        }
        setProducts(temp);
      } catch (err) {}
    };
    fetchProducts();
  }, []);

  console.log(products);

  const NavLink = ({ title }) => {
    return (
      <div className="relative">
        <span
          className="text-gray-600 cursor-pointer transition-colors"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseOver={(e) => (e.target.style.borderBottom = "2px solid black")}
          onMouseOut={(e) =>
            (e.target.style.borderBottom = "2px solid transparent")
          }
        >
          {title}
        </span>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-0 transition-opacity"
          style={{
            borderBottomLeftRadius: "2px",
            borderBottomRightRadius: "2px",
          }}
        ></div>
      </div>
    );
  };
  return (
    <div>
      <div
        className="w-[80%] h-[500px] m-auto  flex flex-col items-center"
        style={{ marginTop: "30px" }}
      >
        {/* Heading */}
        <h2
          className="text-3xl font-bold mb-4"
          style={{
            color: "#34251F",
            fontFamily: "Frank Ruhl Libre",
            fontSize: "40px",
          }}
        >
          Our Product
        </h2>
        <div
          className="flex justify-center gap-10 w-full mb-4"
          style={{ fontWeight: "bold" }}
        >
          <NavLink title="MOST LOVED" />
          <NavLink title="SALE" />
          <NavLink title="TRENDING " />
          <NavLink title="NEW ARRIVAL" />
        </div>

        <div className="flex justify-center gap-5 w-full mb-4 ">
          {products.map((product) => (
            <div
              className=" bg-gray-100 shadow-md rounded-md p-4 "
              style={{ width: "300px", height: "350px" }}
            >
              <Image
                src={"http://localhost:4001/files/" + product.mainImage}
                alt="Image 1"
                className="mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
