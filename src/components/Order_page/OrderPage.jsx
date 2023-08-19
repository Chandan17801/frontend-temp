import React from "react";
import {
  IoSettingsSharp,

  IoNotificationsSharp,
  IoHelpSharp,
} from "react-icons/io5";
import { IoCartSharp } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';
import ProductCart from "./ProductCart";
import SimilarCart from "./SimilarCart";
import { IoWalletSharp } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { IoSearchSharp } from 'react-icons/io5';
import Image from "next/image";
import explore from '../../assets/explore.png';
import { IoHomeSharp } from 'react-icons/io5';
import { useState } from "react";
import Address from "./Address";
function OrderPage() {
  const [state, setState] = useState(true);
  return (
    <div>
      {
        state ?
          <div className="flex main gap-10 mt-10">
             <div
                    className="leftdiv "
                    style={{
                        width: "20%",
                        height: "1000px",

                        marginLeft: "40px",
                        paddingLeft: "40px"

                    }}
                >
                    <div
                        className="flex flex-col gap-7 h-full p-4"
                        style={{
                            width: "80%",
                            margin: "auto",
                            color: "#000",
                            fontFamily: "Podkova",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                        }}
                    >
                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                < IoHomeSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Home
                            </a>
                        </div>


                        {/* <div className="text-[-#000] flex items-center space-x-2 ml-3 gap-5">
                            <div>
                                  <Image src={explore} alt="" />
                            </div>
                          
                            <a href="#" className="icon1">
                                Explore
                            </a>
                        </div> */}








                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoCartSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Cart{" "}
                            </a>
                        </div>

                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoHeartSharp style={{ width: "30px", height: "30px", marginTop: "5px", color: "red" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Saved{" "}
                            </a>
                        </div>

                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoWalletSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Coins{" "}
                            </a>
                        </div>

                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoPersonSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Profile{" "}
                            </a>
                        </div>
                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoMailSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Contact us{" "}
                            </a>
                        </div>

                        <div
                            style={{
                                width: "80%",
                                color: "#1C1C1C",
                                fontFamily: "Roboto",
                                fontSize: "32px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                            }}
                        >
                            <div>
                                <IoSettingsSharp style={{ width: "25px", height: "25px", marginTop: "5px" }} />
                            </div>
                            <a href="#" className="icon1" style={{ marginLeft: "15px", fontSize: "25px" }}>
                                {" "}
                                Setting{" "}
                            </a>
                        </div>







                    </div>
                </div>

            {/* Main Content */}
            <div className="right w-50 ml-20" style={{ height: "auto" }}>
              <h1
                style={{
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  display: "flex",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                Your Oder's
              </h1>
              <ProductCart setState={setState} /> <br />
              <ProductCart setState={setState} />

              <br />
              <br />

              <hr
                style={{ backgroundColor: "#979797", margin: "20px 0px 20px 20px" }}
              />
              <h1
                style={{
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  display: "flex",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                Similar Options
              </h1>
              <div style={{ display: "flex", width: "750px", height: "200px", gap: "55px" }}>
                <SimilarCart />
                <SimilarCart />
                <SimilarCart />
              </div>





            </div>
          </div> : <Address />





      }

    </div>
  );
}

export default OrderPage;
