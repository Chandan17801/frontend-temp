import Image from "next/image";
import { Inter } from "next/font/google";
import Image1 from "../assets/images1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <div className="flex p-8 w-[70%] m-auto " >
        <div className="w-[530px] h-[563px]  m-auto gap-10" >
          <div className="flex-1 h-[300px] w-[370px]">
            <h1
              className="text-3xl font-bold mb-4 text-5xl"
              style={{
                color: "#34251F",
                fontWeight: "700px",
                lineHeight: "55px",
                fontFamily: "Frank Ruhl Libre",
              }}
            >
              Find The Best Fashion Trend For You
            </h1>
            <p
              className=""
              style={{
                color: "rgba(52, 37, 31, 1)",
                fontSize: "18px",
                fontFamily: "Lato",
              }}
            >
              A Saree is The Perfect Way Of Proudly Flaunting Who i Am Without To
              Say It. <br></br>The Saree Makes Woman Look Preety Yet <br></br>{" "}
              Graceful All At The Same Time
            </p>
            <button
              className="text-white font-bold py-2 px-4 rounded shadow-md mt-8"
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
        <div>
          <div
            className="w-[400px]  h-[350px] relative shadow-[5px_5px_0px_0px_rgba(109,40,217)]  "
            style={{ backgroundColor: "rgba(216, 219, 81, 0.72)", paddingRight: "-900px" }}
          >
            {/* Right Images */}
            <Image
              src={Image1}
              alt="Image 1"


              className="mb-4 absolute left-[-67px] bottom-[-60px] h-[430px]"

            />
          </div>
        </div>
      </div>

      {/* New div with the requested structure */}

      <div className="w-[70%] h-[500px]  flex flex-col  m-auto" style={{ marginTop: "-150px" }} >
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
            <div className="flex mt-4 w-[900px] justify-center  gap-5">
              {/* Div 1 */}
              <div
                className="flex flex-col justify-center p-4 h-[350px] w-[290px]"
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

              {/* Div 2 */}
              <div
                className="flex flex-col justify-center p-4 h-[350px] w-[290px]"
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
                className="flex flex-col justify-center p-4 h-[350px] w-[290px]"
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

      <div className=" w-[70%] m-auto relative" style={{ marginTop: '-100px' }}>
        {/* Yellow Circles */}
        <div
          className="rounded-full  opacity-0.5 h-96 w-96 absolute top-[-50px] left-[-50px]"
          style={{ backgroundColor: "rgba(217, 201, 59, 0.79)" }}
        ></div>
        <div
          className="rounded-full bg-yellow-500 opacity-1 h-60 w-60 absolute top-24 left-[200px]"
          style={{ backgroundColor: "rgba(133, 115, 19, 0.88)" }}
        ></div>

        {/* Bigger Circle */}

        {/* You can add content inside the circle */}
        {/* For example: */}

      </div>

      <div className="w-[92%] h-[450px] flex justify-center gap-20 items-center bg-yellow-600" style={{ marginTop: "250px", marginLeft: "4%", marginRight: "4%" }}>
        {/* Left Side */}
        <div className="flex flex-col items-center">
          {/* Small Circle */}
          <div className="rounded-full   h-20 w-20 mb-2" style={{ backgroundColor: "rgba(236, 220, 75, 0.63)", marginTop: "60px" }}></div>
          {/* Heading */}
          <div className="w-21  h-30"> <h2 className="text-2xl font-bold mb-4" style={{ fontSize: "40px", marginLeft: "100px", color: "white" }}>Best Seller Product</h2></div>
          <div className="w-22  h-30" style={{ fontSize: "20px", marginLeft: "100px" }}>
            {/* Paragraph */}
            <p className="text-gray-600" style={{ color: "white" }}>
              Your paragraph text goes here. You can add more content as needed.
            </p>
          </div>
          {/* Button */}
          <button className="text-black mt-20 font-bold py-2 px-4 rounded shadow-md  hover:bg-yellow-600 transition-colors " style={{ backgroundColor: "white", border: "black solid 2px" }}>
            See More
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center gap-5 mt-20" style={{height: "400px", width: "700px" }}>
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

      {/* New div with the requested structure */}
      <div className="w-[80%] h-[900px] m-auto mt-8 flex flex-col items-center" >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#34251F", fontFamily: "Frank Ruhl Libre", fontSize: "40px" }}>Our Product</h2>
        <div className="flex justify-center gap-10 w-full mb-4">
          <NavLink title="Best Seller" />
          <NavLink title="On Sell" />
          <NavLink title="Trending Now" />
          <NavLink title="New Arrival" />
        </div>
        {/* First Row */}
        <div className="flex justify-center gap-5 w-full mb-4">
          {/* Product 1 */}
          <div className=" bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 2 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 3 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 4 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-5 w-full mb-4">
          {/* Product 5 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 6 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 7 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>

          {/* Product 8 */}
          <div className="w-40 h-40 bg-gray-100 shadow-md rounded-md p-4 " style={{ width: "250px", height: "350px" }}>
            {/* Product Image */}
            <Image src={Image1} alt="Image 1" className="mb-4" />
          </div>
        </div>
      </div>



    </div>
  );
}
