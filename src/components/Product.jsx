import React from "react";
import { FaPlus } from "react-icons/fa"; // Import the plus icon

function Product(props) {
  const product = props.product;
  return (
    <div>
      <div className="bg-gray-100 shadow-md rounded-md p-4 w-[250px] h-[300px] productCard">
        {/* Product Image */}
        <img
          src={"http://localhost:4001/files/" + product.mainImage}
          alt={`Image `}
          className="m-auto h-[95%]"
        />
        {/* Content */}
        <div
          className="flex justify-between items-center"
          style={{
            marginTop: "-20px",
            fontSize: "15px",
            fontFamily: "Lato",
            opacity: "0.9",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <div className="font-bold">
            <p>{product.description}</p>
            <p className="productPrice">Price {product.price}</p>
          </div>
          <div
            className="AddToCartButton"
            style={{
              backgroundColor: "#E0DB5C",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaPlus color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
