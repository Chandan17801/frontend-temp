import Image from "next/image";
import { Inter } from "next/font/google";
import Image1 from "../assets/images1.png";
import Image13 from "../assets/image13.jpg";

import Img1 from "../assets/Img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Topsection from "@/components/landingpage/Topsection";
import Newcollection from "@/components/landingpage/Newcollection";
import BestSell from "@/components/landingpage/BestSell";
import OurProduct from "@/components/landingpage/OurProduct";
import OfficeProduct from "@/components/landingpage/OfficeProduct";
// import vector from "../assets/Vector.png";
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
     <Topsection/>

      {/* New div with the requested structure */}

     <Newcollection/>

     <BestSell/>

      

      {/* New div with the requested structure */}
      <OurProduct/>


      <div className="w-[80%] h-[70%] m-auto  bg-yellow-600" style={{ marginTop: "-30px", marginBottom: "25px", border: "2px solid black" }}>
        <Image src={Image13} alt="Image 13" style={{ width: "100%", height: "70%", objectFit: "cover" }} />

      </div>



     <OfficeProduct/>


    </div>
  );
}
