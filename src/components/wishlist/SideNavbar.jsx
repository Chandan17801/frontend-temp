import React, { useState } from "react";
import SideNavItems from "./SideNavItems";

import home from "../../assets/sidebar/download (1) 1.png";
import explore from "../../assets/sidebar/download (2) 1.png";
import saved from "../../assets/sidebar/image 2.png";
import cart from "../../assets/sidebar/download (4) 1.png";
import selling from "../../assets/sidebar/download (5) 1.png";
import profile from "../../assets/sidebar/download (7) 1.png";
import contact from "../../assets/sidebar/icons8-messages-50 1.png";
import settings from "../../assets/sidebar/icons8-settings-100 1.png";

const sideBarData = [
  { id: "1", title: "Home", image: home },
  { id: "2", title: "Explore", image: explore },
  { id: "3", title: "Saved", image: saved },
  { id: "4", title: "Cart", image: cart },
  { id: "5", title: "Selling", image: selling },
  { id: "6", title: "Profile", image: profile },
  { id: "7", title: "Contact Us", image: contact },
  { id: "8", title: "Setting", image: settings },
];

function SideNavbar(props) {
  const [selected, setSelected] = useState("1");

  const itemClickHandler = (data) => {
    setSelected(data);
  };

  return (
    <div className="w-[16.9375rem] flex flex-col gap-5 mb-5 flex-shrink-0 bg-white">
      {sideBarData.map((data) => (
        <SideNavItems
          key={data.id}
          id={data.id}
          title={data.title}
          image={data.image}
          onClick={itemClickHandler}
          sel={selected}
        />
      ))}
    </div>
  );
}

export default SideNavbar;
