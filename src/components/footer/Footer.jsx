import React from "react";
import footer from "../../assets/footer.png";

const imgUrl = [
  {
    id: 1,
    url: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  },
  {
    id: 2,
    url: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
  },
  {
    id: 3,
    url: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
  {
    id: 4,
    url: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4A7MbhxFybC6nyn90yr-UPrF-qYOtif9uNzcK4XuuiA&s",
  },
];

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footer.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="xl:w-[94.95rem] lg:w-[68rem] md:w-[64rem] w-[37rem] h-[20rem] flex flex-col"
    >
      <div className="h-[5rem] w-[29.9375rem] bg-[#FFFFFF] flex justify-center items-center translate-y-[2.5rem] rounded-sm gap-[1.8rem] m-auto">
        {imgUrl.map((data) => (
          <img
            key={data.id}
            src={data.url}
            className="h-[75%] cursor-pointer"
            alt=""
          />
        ))}
      </div>
      <div className="bg-black w-[100%] h-[100%] pt-[4.5rem] px-[1rem] text-white 2xl:gap-[4rem] gap-[3rem] flex flex-col">
        <div className="flex gap-[2.81rem] font-bold justify-center items-center">
          <div className="uppercase">About</div>
          <div className="uppercase">Contact us</div>
          <div className="uppercase">Help</div>
          <div className="uppercase">FAQ</div>
        </div>
        <div className="xl:text-[1.3rem] lg:text-[1.2rem] text-[1.1rem] uppercase text-center font-semibold">
          Exchange/Return Order | Exchange and Refund Policy | Terms and
          Conditions | Privacy Policy | Shipping Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
