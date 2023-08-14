import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1424 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1424, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const SliderCon = () => {
  return (
    <div className="mr-1 ml-1">
      <h2 className="text-center text-1xl md:text-5xl mt-5 mb-3 font-bold text-[#34251F] hover:text-blue-500" style={{fontFamily:"Frank Ruhl Libre"}}>
      What People Say About Us
      </h2>
      <div className="ml-[20px] mr-[20px] md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] mb-10 hover:text-blue-500 text-justify">
        <p className="text-[10px] md:text-[15px] lg:text-[20px] text-gray-500 text-center" style={{fontFamily:"Lato"}}>
          Get guaranteed scalability with expertise in everything related to
          Android app development.
        </p>
      </div>
      <div>
        <Carousel responsive={responsive} infinite={true}>
          <div className="mb-10 h-[300px] w-[470px]" style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
              <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
          <div className="mb-10 h-[300px] w-[470px]"style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
            <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
          <div className="mb-10 h-[300px] w-[470px]" style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
            <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
          <div className="mb-10 h-[300px] w-[470px]"style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
            <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
          <div className="mb-10 h-[300px] w-[470px]"style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
            <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
          <div className="mb-10 h-[300px] w-[470px]"style={{backgroundColor:"rgba(238, 221, 204, 1)"}}>
            <div className="flex flex-col justify-center items-center">
            <h2>Comfortable and met all my expectations! <br></br>I ordered a Silk Saree and it is perfectly</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                
              </p>
            </div>
          </div>
         
         
        </Carousel>
      </div>
    </div>
  );
};

export default SliderCon;
