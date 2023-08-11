import React from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import Image1 from "../assets/images1.png";

const products = [
  {
    imageSrc: Image1,
    description: "Saree....",
    price: "$33.38"
  },
  // Add more products here if needed
];

function Product() {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 shadow-md rounded-md p-4" style={{ width: "250px", height: "300px" }}>
          {/* Product Image */}
          <Image src={product.imageSrc} alt={`Image ${index + 1}`} className="mb-4" />
          {/* Content */}
          <div className='flex justify-between items-center' style={{marginTop:"-20px", fontSize: "15px", fontFamily: "Lato", opacity: "0.9", padding: '8px', borderRadius: '4px' }}>
            <div className="font-bold">
              <p>{product.description}</p>
              <p>Price {product.price}</p>
            </div>
            <div style={{ backgroundColor: "#E0DB5C", padding: "8px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FaPlus size={20} color="white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
