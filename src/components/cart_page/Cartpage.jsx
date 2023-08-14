import React from 'react';

import { FaHome, FaCompass, FaBookmark, FaShoppingCart, FaCoins, FaUser, FaPhone, FaCog } from 'react-icons/fa';
import Cart from './Cart';
import Productcart from './Productcart'
function Cartpage() {

    return (
        <div className='flex w-80 mx-auto' style={{ width: '90%' }}>
            {/* Left Column */}
            <div className='w-20 ' style={{ width: '20%', height: '500px' }}>
                <div className='flex flex-col gap-7 h-full p-4' style={{
                    width: "80%", margin: "auto", color: '#000',
                    fontFamily: 'Podkova',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaHome />
                        <a href='#'>Home</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaCompass />
                        <a href='#'>Explore</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaBookmark />
                        <a href='#'>Saved</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaShoppingCart />
                        <a href='#'>Cart</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaCoins />
                        <a href='#'>Coins</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaUser />
                        <a href='#'>Profile</a>
                    </div>
                    <div className='text-[-#000] flex items-center space-x-2'>
                        <FaPhone />
                        <a href='#'>Contact Us</a>
                    </div>
                    <div className='text-[-#000]
                       flex items-center space-x-2'>
                        <FaCog />
                        <a href='#'>Settings</a>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className='w-80' style={{ width: '80%', height: 'auto', marginTop: "20px" }}>
                {/* Content for the right column */}
                <div style={{
                    width: '464px',
                    height: '50px',
                    flexShrink: '0', margin: '20px 0px 0px 40px'
                }}> <h4 style={{
                    color: '#928A8A',
                    fontFamily: 'Podkova',
                    fontSize: '22px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal'
                }}>Cart (2)</h4></div>
                <div style={{
                    width: '767px',
                    height: '59px',
                    flexShrink: '0', marginLeft: '50px'
                }}> <h4 style={{
                    color: '#000',
                    fontFamily: 'Podkova',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal'
                }}>Subtotal 2,900</h4>
                    <p style={{
                        color: '#767672',
                        fontFamily: 'Podkova',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Add an item of $100 and get <span
                        style={{
                            color: '#388613',
                            fontFamily: 'Podkova',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        }}

                    >Free Delivery</span></p></div>
                <button style={{
                    width: '200px',
                    height: '50px',
                    flexShrink: '0', borderRadius: '20px',
                    background: '#BBA116',
                    margin: '20px 0px 0px 50px'
                }}><p style={{


                    flexShrink: '0',
                    color: '#FFF',
                    fontFamily: 'Podkova',
                    fontSize: '26px',
                    fontStyle: 'normal',
                    fontWeight: '300',

                }}>proced to cart </p></button>
                <Productcart />
                <Productcart />

                <div style={{
                    width: '464px',
                    height: '87px',
                    flexShrink: '0',
                    color: '#000',
                    fontFamily: 'Podkova',
                    fontSize: '48px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 'normal',
                    margin: '20px 0px 0px 50px'
                }}>
                    Similar Options
                </div>


                <div className=" m-auto mt-8 flex flex-col items-center">
                    {/* Heading */}

                    {/* First Row */}
                    <div className="productsCardParent flex justify-center gap-5 w-full mb-4">
                        {/* Product 1 */}
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />

                    </div>
                    <div style={{
                        width: '464px',
                        height: '87px',
                        flexShrink: '0',
                        color: '#000',
                        fontFamily: 'Podkova',
                        fontSize: '48px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        margin: '20px 0px 0px -550px'
                    }}>
                        Previous Views
                    </div>

                    {/* Second Row */}
                    <div className="productsCardParent flex justify-center gap-5 w-full mb-4">
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                    </div>

                </div>


            </div>
        </div>





    );
}

export default Cartpage;
