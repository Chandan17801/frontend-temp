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
    <div className="md:w-[44rem] w-[35rem]">
      <div className="flex px-2">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className="translate-y-[1rem] cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons/" clipPath="url(#clip0_1_7)">
            <path
              id="Vector"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.35221 9.7591H20.5549C20.903 9.7591 21.2368 9.89738 21.483 10.1435C21.7291 10.3897 21.8674 10.7235 21.8674 11.0716C21.8674 11.4197 21.7291 11.7535 21.483 11.9997C21.2368 12.2458 20.903 12.3841 20.5549 12.3841H5.35221L11.3779 18.4098C11.6243 18.6561 11.7629 18.9902 11.763 19.3386C11.7631 19.687 11.6248 20.0212 11.3786 20.2676C11.1323 20.5141 10.7982 20.6526 10.4498 20.6527C10.1014 20.6529 9.76716 20.5146 9.52071 20.2683L1.25196 11.9995C1.0059 11.7534 0.867676 11.4196 0.867676 11.0716C0.867676 10.7236 1.0059 10.3898 1.25196 10.1437L9.52071 1.87491C9.76733 1.62864 10.1017 1.49042 10.4502 1.49066C10.7988 1.49091 11.1329 1.6296 11.3792 1.87623C11.6255 2.12285 11.7637 2.45721 11.7635 2.80575C11.7632 3.15428 11.6245 3.48845 11.3779 3.73473L5.35221 9.7591Z"
              fill="#585858"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7">
              <rect
                width="21"
                height="21"
                fill="white"
                transform="translate(0.867401 0.571594)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="ml-[3.87rem] text-[2.25rem]">Profile</div>
      </div>
      <div className="bg-[#EBECE5] h-[13.25rem] flex">
        <div className="ml-[2.19rem] mt-[1.5rem] bg-[#D9D9D9] h-[10rem] w-[8.9rem] rounded-full"></div>
        <div className="px-[2rem] py-[1.5rem]">
          <div className="text-[2.9rem] font-[600]">Meena Arora</div>
          <div className="text-[1.25rem] text-[#737373] font-[600]">
            meera29arora.gmail.com
          </div>
          <div className="text-[1.25rem] text-[#737373] font-[600]">
            +9876543210
          </div>
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
