import React from 'react'
import Image from "next/image";
import Image1 from "../../assets/images1.png";
function Newcollection() {
  return (
    <div>
     <div className="w-[70%] h-[500px] relative  flex flex-col  m-auto" style={{ marginTop: "0px" }} >
        <div>
          <h1
            className="text-2xl font-bold mb-4 text-center"
            style={{ color: "#34251F", fontFamily: "Frank Ruhl Libre", fontSize: "40px" }}
          >
            New Collection
          </h1>
          <p
            className="text-center"
            style={{ color: "rgba(52, 37, 31, 1)", fontSize: "20px", fontFamily: "Lato" }}
          >
            Check out our latest collection of sarees and stay ahead in the fashion
            game.
          </p>
          <div className="flex justify-center  ">
            <div className="flex mt-4 w-[1200px] justify-center  gap-10">
              {/* Div 1 */}
              <div
                className="flex flex-col justify-center p-4 h-[410px] w-[350px]"
                style={{ backgroundColor: "#E5E7EB" }}
              >
                {/* Add content for the first div */}
                <Image src={Image1} alt="Image 1" className="mb-4 h-[300px] w-[300px]" />
                <button
                  className="text-white font-bold py-2 px-4 rounded shadow-md mt-2"
                  style={{ backgroundColor: "#34251F", opacity: "90%" }}
                >
                  Saree
                </button>
              </div>

              {/* Div 2 */}
              <div
                className="flex flex-col justify-center p-4 h-[410px] w-[350px]"
                style={{ backgroundColor: "#E5E7EB" }}
              >
                {/* Add content for the first div */}
                <Image src={Image1} alt="Image 1" className="mb-4" />
                <button
                  className="text-white font-bold py-2 px-4 rounded shadow-md mt-2"
                  style={{ backgroundColor: "#34251F", opacity: "90%" }}
                >
                  Saree
                </button>
              </div>

              {/* Div 3 */}
              <div
                className="flex flex-col justify-center p-4 h-[410px] w-[350px]"
                style={{ backgroundColor: "#E5E7EB" }}
              >
                {/* Add content for the first div */}
                <Image src={Image1} alt="Image 1" className="mb-4" />
                <button
                  className="text-white font-bold py-2 px-4 rounded shadow-md mt-2"
                  style={{ backgroundColor: "#34251F", opacity: "90%" }}
                >
                  Saree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Newcollection