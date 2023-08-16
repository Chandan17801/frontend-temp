import React from "react";
import AddressCard from "./AddressCard";

const address = [
  {
    id: 1,
    address: "Street: 2, The Mall, Station Road, Malad (west)",
    city: "City: Mumbai",
    state: "State/province/area: Maharashtra",
    phone: "Phone number: 02228803089",
    zip: "Zip code: 400064",
    country: "Country calling code: +91",
    code: "Country: India",
  },
  {
    id: 2,
    address: "Street: 2, The Mall, Station Road, Malad (west)",
    city: "City: Mumbai",
    state: "State/province/area: Maharashtra",
    phone: "Phone number: 02228803089",
    zip: "Zip code: 400064",
    country: "Country calling code: +91",
    code: "Country: India",
  },
];

function Profile() {
  return (
    <div className="md:w-[44rem] w-[35rem] flex-col">
      <div className="ml-[4.87rem] text-[2.25rem]">Profile</div>
      <div className="bg-[#EBECE5] h-[13.25rem] flex">
        <div className="ml-[2.19rem] mt-[1.5rem] bg-[#D9D9D9] h-[10rem] w-[8.9rem] rounded-full"></div>
        <div className="px-[2rem] py-[1.5rem]">
          <div className="text-[2.9rem] font-[600]">Meena Arora</div>
          <div className="text-[1.25rem] text-[#737373] font-[600]">meera29arora.gmail.com</div>
          <div className="text-[1.25rem] text-[#737373] font-[600]">+9876543210</div>
        </div>
      </div>
      <div className="my-5">
        {address.map((data) => (
          <AddressCard key={data.id} val={data} />
        ))}
      </div>
      <div className="mx-[3.13rem] my-5 text-[#D6CB6B] text-[1.125rem] font-[600] cursor-pointer">
        Add another address
      </div>
    </div>
  );
}

export default Profile;
