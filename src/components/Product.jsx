import React from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../store/features/cart";
import { FaPlus } from "react-icons/fa"; // Import the plus icon

function Product(props) {
  const product = props.product;
  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    dispatch(
      add_to_cart({
        _id: product._id,
        image: product.mainImage,
        quantity: 1,
        name: product.productName,
        price: product.offeredPrice,
      })
    );
  };

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
            <p>{product.productName}</p>
            <p className="productPrice">Price: Rs. {product.offeredPrice}</p>
          </div>
          <div
            className="AddToCartButton cursor-pointer"
            style={{
              backgroundColor: "#E0DB5C",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onClickAddHandler}
          >
            <FaPlus color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
