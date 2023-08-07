import React from 'react'
import Image1 from "../../assets/images1.png";
import Image from 'next/image';
function Topsection() {
  return (
    <div>
       <div className="flex p-8 w-[100%]  " style={{ justifyContent: "space-between" }} >
        <div className="w-[400] h-[563px]" style={{ marginLeft: "150px", paddingTop: "60px" }}>
          <div className="flex-1 h-[500px] w-[500px]">
            <h1
              className=" font-bold mb-4 text-6xl"
              style={{
                color: "#34251F",
                fontWeight: "700px",
                lineHeight: "57px",
                fontFamily: "Frank Ruhl Libre",
              }}
            >
              Find The Best <br></br> Fashion Trend <br></br> For You
            </h1>
            <p
              className=""
              style={{
                color: "rgba(52, 37, 31, 1)",
                fontSize: "20px",
                fontFamily: "Lato",
              }}
            >
              A Saree is The Perfect Way Of Proudly Flaunting <br></br> Who i Am Without To
              Say It. <br></br>The Saree Makes Woman Look Preety Yet <br></br>{" "}
              Graceful All At The Same Time
            </p>
            <button
              className="text-white font-bold py-3 px-9 rounded shadow-md mt-16"
              style={{
                backgroundColor: "#34251F",
                opacity: "90%",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        <div
          className="w-[600px]  h-[580px] relative shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
          style={{ backgroundColor: "rgba(216, 219, 81, 0.72)" }}
        >
       
           <Image
            src={Image1}
            alt="Image 1"


            className="mb-4 absolute left-[-115px]  top-[-30px]"
            style={{ width: "100%", height: "670px", }}
          />
        </div>

      </div>  
    </div>
  )
}

export default Topsection