import React from 'react'
import Image from 'next/image';
import Image1 from "../../assets/images1.png";
function OfficeProduct() {
  return (
    <div>
       <div className="w-[80%] h-[500px] m-auto mt-8 flex flex-col items-center" >
        {/* Heading */}

        {/* First Row */}
        <div className="flex justify-center gap-5 w-full mb-4" >
          {/* Product 1 */}
          <div className="bg-gray-100 shadow-md rounded-md p-4" style={{ width: "300px", height: "400px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
            {/* Content */}
           
          </div>

          {/* Product 2 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4" style={{ width: "300px", height: "400px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
            {/* Content */}
           
          </div>

          {/* Product 3 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4" style={{ width: "300px", height: "400px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
            {/* Content */}
            
          </div>

          {/* Product 4 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4" style={{ width: "300px", height: "400px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
            {/* Content */}
           
          </div>
        </div>

        {/* Second Row */}
       
      </div>

    </div>
  )
}

export default OfficeProduct
