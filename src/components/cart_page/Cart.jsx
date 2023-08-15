import React from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import Image1 from "../../assets/images1.png";
import star from "../../assets/star.png";
import heart from '../../assets/heart.png'
const products = [
  {
    imageSrc: Image1,
    description: "Saree....",
    price: "$33.38"
  },
  // Add more products here if needed
];

function Cart() {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="bg-gray-100 shadow-md rounded-md p-4 w-[250px] h-[350px] productCard">
          {/* Product Image */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}> <Image src={heart} alt="" /></div>
          <Image src={product.imageSrc} alt={`Image ${index + 1}`} className="mb-4" />
          {/* Content */}
          <div className='flex justify-between items-center' style={{ marginTop: "-20px", fontSize: "15px", fontFamily: "Lato", opacity: "0.9", padding: '8px', borderRadius: '4px' }}>
            <div className="font-bold">
              <p>{product.description}</p>
              <p className='productPrice' >Price {product.price}</p>
            </div>
          </div>
          <div className='flex justify-between items-center' style={{ marginTop: "-20px", fontSize: "15px", fontFamily: "Lato", opacity: "0.9", padding: '8px', borderRadius: '4px' }}>
            <div className="font-bold flex">
              <Image src={star} alt="" style={{ width: '20px', height: '20px' }} />
              <p className='productPrice' style={{
                color: '#FF6838',
                fontFamily: 'Podkova',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal'
              }} >4.9</p>
            </div>
            <div className='AddToCartButton' style={{ backgroundColor: "#F4EC31", padding: "8px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FaPlus color="white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
