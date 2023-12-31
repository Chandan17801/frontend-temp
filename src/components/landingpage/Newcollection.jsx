import React, { useState, useEffect } from "react";
import Router from "next/router";

function Newcollection(props) {
  const [products, setProducts] = useState([]);
  const { data } = props;

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      if (i == 3) break;
      temp.push(data[i]);
    }
    setProducts(temp);
  }, [data]);

  const openDetail = (id) => {
    Router.push({
      pathname: "/products/" + id,
    });
  };

  return (
    <div>
      <div className="w-[70%] h-[500px] relative  flex flex-col mt-[2rem] m-auto">
        <div>
          <h1
            className="text-2xl font-bold mb-4 text-center"
            style={{
              color: "#34251F",
              fontFamily: "Frank Ruhl Libre",
              fontSize: "40px",
            }}
          >
            New Collection
          </h1>
          <p
            className="text-center"
            style={{
              color: "rgba(52, 37, 31, 1)",
              fontSize: "20px",
              fontFamily: "Lato",
            }}
          >
            Check out our latest collection of sarees and stay ahead in the
            fashion game.
          </p>
          <div className="flex justify-center  ">
            {products.map((product) => (
              <div
                key={product._id}
                className="flex mt-4 w-[1200px] justify-center  gap-10"
                onClick={() => openDetail(product._id)}
              >
                <div
                  className="flex flex-col justify-center p-4 h-[410px] w-[350px]"
                  style={{ backgroundColor: "#E5E7EB" }}
                >
                  <img
                    src={"http://localhost:4001/files/" + product.mainImage}
                    alt="Image 1"
                    className="mb-4 h-[350px] 
                "
                    style={{ backgroundSize: "cover" }}
                  />
                  <button
                    className="text-white font-bold py-2 px-4 rounded shadow-md mt-2"
                    style={{ backgroundColor: "#34251F", opacity: "90%" }}
                  >
                    {product.productName}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newcollection;
