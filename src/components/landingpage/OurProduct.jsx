import React from 'react'
import Image from 'next/image'
import Image1 from "../../assets/images1.png";

function OurProduct() {
    const NavLink = ({ title }) => {
        return (
          <div className="relative">
            <span
              className="text-gray-600 cursor-pointer transition-colors"
              style={{ borderBottom: '2px solid transparent' }}
              onMouseOver={(e) => (e.target.style.borderBottom = '2px solid black')}
              onMouseOut={(e) => (e.target.style.borderBottom = '2px solid transparent')}
            >
              {title}
            </span>
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-0 transition-opacity"
              style={{ borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px' }}
            ></div>
          </div>
        );
      };
  return (
    <div>
        <div className="w-[80%] h-[500px] m-auto  flex flex-col items-center" style={{marginTop:"30px"}}>
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#34251F", fontFamily: "Frank Ruhl Libre", fontSize: "40px" }}>Our Product</h2>
        <div className="flex justify-center gap-10 w-full mb-4" style={{ fontWeight: "bold" }} >
          <NavLink title="MOST LOVED" />
          <NavLink title="SALE" />
          <NavLink title="TRENDING " />
          <NavLink title="NEW ARRIVAL" />
        </div>
        {/* First Row */}
        <div className="flex justify-center gap-5 w-full mb-4 "  >
          {/* Product 1 */}
          <div className=" bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "300px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 2 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "300px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 3 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "300px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 4 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "300px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>
        </div>

        {/* Second Row */}
      
      </div>
    </div>
  )
}

export default OurProduct