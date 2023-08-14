import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/img1.jpeg'
import heart from '../../assets/heart.png'
import { useState } from 'react';
function Product() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <div style={{
                display: 'flex',
                width: '713px',
                height: '350px',
                flexShrink: '0', borderRadius: '10px',
                background: '#FFF',
                boxShadow: '0px 22px 40px 0px rgba(0, 0, 0, 0.25)', marginLeft: '40px', marginTop: '50px', paddingTop: "20px"
            }}>

                <div style={{
                    width: '200px',
                    height: '250px',
                    flexShrink: '0', backgroundColor: "red", marginLeft: '40px'
                }}>

                    <Image src={img1} alt="Image 1" style={{ height: '260px' }} />
                    {/* <div style={{
                        width: '146px',
                        height: '33px',
                        flexShrink: '0', fill: 'rgba(35, 28, 28, 0.67)',
                        filter: 'blur(11px)'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="77" viewBox="0 0 190 77" fill="none">
                            <g filter="url(#filter0_f_2_4)">
                                <ellipse cx="95" cy="38.5" rx="73" ry="16.5" fill="#231C1C" fill-opacity="0.67" />
                            </g>
                            <defs>
                                <filter id="filter0_f_2_4" x="0" y="0" width="190" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_2_4" />
                                </filter>
                            </defs>
                        </svg>

                    </div> */}
                </div>
                <div style={{
                    width: '400px',
                    height: '260px',
                    flexShrink: '0', marginLeft: '40px'
                }}>
                    <h3 style={{
                        color: '#000',
                        fontFamily: 'Podkova',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal', margin: '10px 0px 0px 20px'
                    }}>Saree....</h3>

                    <p style={{
                        color: '#000',
                        fontFamily: 'Podkova',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal', margin: '10px 0px 0px 20px'
                    }}>Description</p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px', height: '80px', margin: '20px 0px 0px 20px' }}>
                        <p style={{
                            color: '#FF6F07',
                            fontFamily: 'Podkova',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal', margin: '20px 0px 0px 20px'
                        }}>Price 450.55</p>
                        <button style={{
                            width: '95px',
                            display: 'flex',
                            height: '34px',
                            flexShrink: '0', borderRadius: '10px',
                            background: '#F5F4F4',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', margin: '10px 0px 0px 20px',
                            justifyContent: 'space-around'
                        }}>




                            <p
                                style={{
                                

                                   
                                    
                                        color: '#000',
                                        fontFamily: 'Podkova',
                                        fontSize: '23px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: 'normal'
                                    
                                }}
                                onClick={handleDecrement}
                            >
                                -
                            </p>
                            <span style={{
                                color: '#000',
                                fontFamily: 'Podkova',
                                fontSize: '23px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }}>{quantity}</span>
                            <p
                                style={{
                                    color: '#000',
                                    fontFamily: 'Podkova',
                                    fontSize: '23px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: 'normal'
                                }}
                                onClick={handleIncrement}
                            >
                                +
                            </p>

                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '400px', height: '80px', margin: '20px 0px 0px 20px' }}>
                        <div style={{
                            display: 'flex',
                            width: '56px',
                            height: '47px',
                            padding: '11px 16px 11px 15px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: '0',
                            borderRadius: '10px',
                            border: '2px solid rgba(255, 247, 56, 0.63)'
                        }}>
                            <Image src={heart} alt="" style={{ width: '500px' }} />
                        </div>
                        <div>
                            <button style={{
                                color: '#000',
                                fontFamily: 'Podkova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal', borderRadius: '10px',
                                border: '2px solid rgba(255, 247, 56, 0.63)', padding: '10px 5px 9px 5px'
                            }}>Save for later</button>


                        </div>
                        <button style={{
                            backgroundColor: 'rgba(255, 247, 56, 0.63)',
                            fontFamily: 'Podkova',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 'normal', borderRadius: '10px',
                            border: '2px solid rgba(255, 247, 56, 0.63)',
                            width: '100px',
                            height: '40px'
                        }}>Buy Now</button>

                    </div>

                </div>
                <div>

                </div>

            </div>

        </div>
    )
}

export default Product
