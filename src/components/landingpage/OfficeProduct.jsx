import React, { useState, useEffect } from "react";

function OfficeProduct(props) {
  const [products, setProducts] = useState([]);
  const { data } = props;

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      if (i == 8) break;
      temp.push(data[i]);
    }
    setProducts(temp);
  }, [data]);

  return (
    <div>
      <div className="w-[80%] m-auto my-8 mb-[5rem] flex flex-col items-center">
        <div className="grid grid-cols-4 gap-[4rem]">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-gray-100 shadow-md rounded-md p-4"
              style={{ width: "300px", height: "400px" }}
            >
              <img
                src={"http://localhost:4001/files/" + product.mainImage}
                alt="Image 1"
                className="mb-4 h-[100%] m-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfficeProduct;
