import React from "react";
// import FooterBackgroundImg from '../../assets/image7.png'
const FooterBackgroundImg =
  "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${FooterBackgroundImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[280px] w-[100%] border-[2px] "
      >
        <div className=" h-[200px] bg-black mt-[80px] relative flex justify-center items-center  ">
          <div className=" w-[480px] h-[70px] bg-white absolute -top-[30px] left-[35%] flex justify-center items-center">
            <p className="  text-xl">Follow Our Instagram:_______________</p>
          </div>
          <div>
            <ul className=" text-white flex gap-14 ">
              <li className="hover:text-blue-400 cursor-pointer">MEN</li>
              <li className="hover:text-blue-400 cursor-pointer">WOMAN</li>
              <li className="hover:text-blue-400 cursor-pointer">KIDS</li>
              <li className="hover:text-blue-400 cursor-pointer">TRENDS</li>
              <li className="hover:text-blue-400 cursor-pointer">CONTACT US</li>
              <li className="hover:text-blue-400 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
