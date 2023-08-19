import React from "react";
import {
    IoSettingsSharp


} from "react-icons/io5";
import { IoCartSharp } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';

import { IoWalletSharp } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import { IoMailSharp } from 'react-icons/io5';
import { IoSearchSharp } from 'react-icons/io5';
import Image from "next/image";
import explore from '../../assets/explore.png';
import { IoHomeSharp } from 'react-icons/io5';
import { useState } from "react";
import Earn from '../../assets/earn.jpg'
import reedam from '../../assets/reedam.jpg'
import coins from '../../assets/coins.png';

function Rewords() {
    const [state, setState] = useState(true);
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
    };
    return (
        <div>

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
                                width: "90%",
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
                            fontFamily: "Podkova",
                            fontSize: "34px",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            display: "flex",
                            marginLeft: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        Rewards
                    </h1>





                    <div style={{
                        paddingLeft: "40px", display: "flex", width: "750px", height: "300px", gap: "55px",
                        borderRadius: '10px',
                        background: '#FFF',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        position: 'relative'
                    }}>
                        <button style={{
                            position: 'absolute', marginLeft: "25px", borderRadius: '20px',
                            backgroundColor: '#FFF',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                            width: '280px',
                            height: '50px', display: 'flex'
                        }}>
                            <div style={{ display: "flex", margin: "auto" }}>
                                <Image src={coins} alt="" />
                                <h3 style={{ marginLeft: "50px", fontSize: "25px", fontFamily: 'Podkova', }}>Coins </h3>
                                <h3 style={{ marginLeft: "50px", fontSize: "25px", fontFamily: 'Podkova', }}> 2000</h3>
                            </div>
                        </button>
                        <div style={{
                            borderRadius: '30px',
                            border: '1px solid #BCB7B7',
                            background: '#FFF', width: "300px", height: "200px", marginTop: "80px", textAlign: "center"
                        }}>
                            <Image style={{ margin: "auto", marginTop: "25px" }} src={Earn}></Image>
                            <h3 style={{
                                fontFamily: 'Podkova',
                                fontSize: '35px',
                                fontWeight: '400'
                            }}>Earn</h3>
                            <p style={{
                                fontFamily: 'Podkova',
                                fontSize: '20px',
                                fontWeight: '400',
                                color: '#A99E9E'
                            }}>View more products to earn coins</p>

                        </div>
                        <div style={{
                            borderRadius: '30px',
                            border: '1px solid #BCB7B7',
                            background: '#FFF', width: "310px", height: "200px", marginTop: "80px", textAlign: "center"
                        }}>
                            <Image style={{ margin: "auto", marginTop: "25px" }} src={reedam}></Image>
                            <h3 style={{
                                fontFamily: 'Podkova',
                                fontSize: '35px',
                                fontWeight: '400'
                            }}>Redeem</h3>
                            <p style={{
                                fontFamily: 'Podkova',
                                fontSize: '20px',
                                fontWeight: '400',
                                color: '#A99E9E'
                            }}>Redeem your coins & enjoy shopping</p>
                        </div>
                    </div>

                    <div style={{
                        paddingLeft: "40px", width: "750px", height: "200px", gap: "55px", borderRadius: '10px',
                        background: '#FFF',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}>
                        <div style={{ width: "500px", display: "flex", marginTop: "20px", gap: "20px" }}>
                            <h3 style={{
                                fontFamily: 'Podkova',
                                fontSize: '35px',
                                fontWeight: '400'
                            }}>Referral</h3>
                            <p style={{
                                color: "rgba(144, 144, 144, 1)", fontFamily: 'Podkova',
                                fontSize: '18px',
                                fontWeight: '400',
                                marginTop: "15px"
                            }}>(Refer your friends to earn rewards)</p>
                        </div>
                        <div style={{ width: "500px", marginTop: "20px", color: "rgba(0, 0, 0, 1)", display: "flex" }}>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#FBD409" />
                            </svg></p>
                            <p style={{ marginLeft: "10px", marginTop: "-5px" }}>You can avail a reward of coupons of 15% off</p>
                        </div>
                        <div style={{ width: "500px", marginTop: "20px", color: "rgba(0, 0, 0, 1)", display: "flex" }}>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#FBD409" />
                            </svg></p>
                            <p style={{ marginLeft: "10px", marginTop: "-5px" }}> Your friends can claim a discount of 10% off if they use your referral</p>
                        </div>
                        <div style={{ margin: "10px 0px 10px 20px" }}>
                            <input type="text" style={{ backgroundColor: '#EDEDED' }} />
                            <button style={{ backgroundColor: "#FBD409", paddingLeft: "5px", paddingRight: "5px" }}>Copy</button>
                        </div>
                        <p style={{
                            fontFamily: 'Podkova',
                            fontSize: '15px',
                            fontWeight: '400',
                            color: '#A99E9E',
                            marginLeft: "20px"
                        }}> You have referred 5 friends</p>
                    </div>

                    <div style={{ paddingLeft: "40px", width: "750px", height: "200px", gap: "55px" }}>
                        <div style={{ width: "500px", marginTop: "20px", gap: "20px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }} >
                                <h3 style={{
                                    fontFamily: 'Podkova',
                                    fontSize: '28px',
                                    fontWeight: '400'



                                }}>Get notified</h3>
                                <button
                                    onClick={handleToggle}
                                    style={{
                                        border: 'none',
                                        borderRadius: '20px',
                                        padding: '0',
                                        width: '60px',
                                        height: '30px',
                                        backgroundColor: isToggled ? '#D9D9D9' : '#D9D9D9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        outline: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                            transform: `translateX(${isToggled ? '28px' : '0'})`,
                                            transition: 'transform 0.3s ease',
                                        }}
                                    ></div>
                                    <span
                                        style={{
                                            flex: '1',
                                            display: 'flex',
                                            justifyContent: isToggled ? 'flex-end' : 'flex-start',
                                            fontSize: '14px',
                                            fontFamily: 'Podkova',
                                            margin: '0 5px',
                                        }}
                                    >
                                        {isToggled ? 'ON' : 'OFF'}
                                    </span>
                                </button>


                            </div>
                            <p style={{
                                color: "rgba(144, 144, 144, 1)", fontFamily: 'Podkova',
                                fontSize: '20px',
                                fontWeight: '400'
                            }}>Keep your notifications on to get the latest updates related to earning coins</p>
                        </div>

                    </div>






                </div>
            </div>







        </div>
    );
}

export default Rewords;
