import Image from "next/image";
import { Inter } from "next/font/google";
import Image13 from "../assets/image13.jpg";
import Image7 from "../assets/image7.png";
import Topsection from "@/components/landingpage/Topsection";
import Newcollection from "@/components/landingpage/Newcollection";
import BestSell from "@/components/landingpage/BestSell";
import OurProduct from "@/components/landingpage/OurProduct";
import OfficeProduct from "@/components/landingpage/OfficeProduct";
import Slider from "@/components/landingpage/SliderCon";
import SearchBar from "@/components/suggestions/Suggestions";
("@/components/suggestions");
// import vector from "../assets/Vector.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const NavLink = ({ title }) => {
    return (
      <div className="relative">
        <span
          className="text-gray-600 cursor-pointer transition-colors"
          style={{ borderBottom: "2px solid transparent" }}
          onMouseOver={(e) => (e.target.style.borderBottom = "2px solid black")}
          onMouseOut={(e) =>
            (e.target.style.borderBottom = "2px solid transparent")
          }
        >
          {title}
        </span>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-0 transition-opacity"
          style={{
            borderBottomLeftRadius: "2px",
            borderBottomRightRadius: "2px",
          }}
        ></div>
      </div>
    );
  };

  return (
    <div>
      <Topsection />
      <Newcollection />
      <BestSell />
      <OurProduct />
      <div
        className="w-[100%] h-[40%]   bg-yellow-600"
        style={{
          marginTop: "-30px",
          marginBottom: "25px",
          border: "2px solid black",
        }}
      >
        <Image
          src={Image13}
          alt="Image 13"
          style={{ width: "100%", height: "40%", objectFit: "cover" }}
        />
      </div>

      <OfficeProduct />
      <div
        className="w-[100%] h-[40%] m-auto  bg-yellow-600"
        style={{
          marginTop: "-30px",
          marginBottom: "25px",
          border: "2px solid black",
        }}
      >
        <Image
          src={Image7}
          alt="Image 13"
          style={{ width: "100%", height: "40%", objectFit: "cover" }}
        />
      </div>

      <Slider />
    </div>
  );
}
