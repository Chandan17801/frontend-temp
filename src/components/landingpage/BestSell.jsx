import React from 'react'
import Image from 'next/image';
import Image1 from "../../assets/images1.png";

function BestSell() {
  return (
    <div>
         <div className=" w-[100%] m-auto relative"  >
        {/* Yellow Circles */}
        <div
          className="rounded-full  opacity-0.5 h-96 w-96 absolute top-[-270px] left-[-50px] z-[-2]"
          style={{ backgroundColor: "rgba(217, 201, 59, 0.79)" }}
        ></div>
        <div
          className="rounded-full bg-yellow-500 opacity-1 h-60 w-60 absolute top-[-150px] left-[280px]"
          style={{ backgroundColor: "rgba(133, 115, 19, 0.88)" }}
        ></div>



      </div>
      <div style={{marginTop:"200px"}}>
        <div className="w-[92%] h-[580px] m-auto  flex justify-center gap-20 items-center  z-[-10]" style={{backgroundColor: "rgba(194, 174, 0, 1)" }}>

          {/* Left Side */}
          <div className="flex flex-col items-center">
            {/* Small Circle */}
            <div className="rounded-full   h-36 w-36 mb-2" style={{ backgroundColor: "rgba(236, 220, 75, 0.63)", marginTop: "40px", marginLeft: "-400px" }}></div>
            {/* Heading */}


            <div className="mt-[-150px] ml-60px">
              <div className="w-21  h-30"> <h2 className="text-2xl font-bold mb-4" style={{ fontSize: "45px", marginLeft: "100px", color: "white", lineHeight: "50px" }}>Best Seller <br></br> Product</h2></div>
              <div className="w-22  h-30" style={{ fontSize: "20px", marginLeft: "100px" }}>
                {/* Paragraph */}
                <p className="text-gray-600" style={{ color: "white" }}>
                  Your paragraph text goes here.<br></br> You can add more content as needed.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="text-black ml-[-134px] mt-20 font-bold py-2 px-4 rounded shadow-md  hover:bg-yellow-600 transition-colors " style={{ backgroundColor: "white", border: "black solid 2px" }}>
              See More
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center gap-5 mt-20" style={{ height: "400px", width: "700px" }}>
            {/* First Product */}
            <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "280px", height: "350px" }}>
              {/* Product Image */}
              <Image src={Image1} alt="Image 1" className="mb-4" />
            </div>

            {/* Second Product */}
            <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4" style={{ width: "280px", height: "350px" }}>
              {/* Product Image */}
              <Image src={Image1} alt="Image 1" className="mb-4" />
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default BestSell