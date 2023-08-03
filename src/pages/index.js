import Image from "next/image";
import { Inter } from "next/font/google";
import Image1 from "../assets/images1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            style={{backgroundColor:"rgba(216, 219, 81, 0.72)",paddingRight:"-900px"}}
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

      <div className="w-[70%] h-[500px]  flex flex-col  m-auto" style={{marginTop:"-150px"}} >
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







    </div>
  );
}
