import React from 'react';
import { IoSettingsSharp, IoPersonSharp, IoNotificationsSharp, IoHelpSharp } from 'react-icons/io5';

function Settingpage() {
    return (
        <div>
            <div className='flex main gap-10 mt-10'>
                <div className='leftdiv ' style={{ width: '30%', height: '1000px', backgroundColor: 'rgba(214, 203, 107, 0.16)' }}>
                    <div className='flex flex-col gap-7 h-full p-4' style={{
                        width: "80%", margin: "auto", color: '#000',
                        fontFamily: 'Podkova',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>
                        <div style={{
                            width: "80%", color: '#1C1C1C',
                            fontFamily: 'Roboto',
                            fontSize: '32px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex'
                        }}>


                            <div><svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                                <g clip-path="url(#clip0_1_5)">
                                    <path d="M28.5591 27.4511L20.071 19.1012L28.5591 10.7512L25.9459 8.18622L14.8262 19.1012L25.9459 30.0161L28.5591 27.4511Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_5">
                                        <rect width="44.4788" height="43.6598" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></div>
                            <a href='#' className='icon1'> Setting</a>
                        </div>
                        <div className='text-[-#000] flex items-center space-x-2 ml-3 gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30"  height="30" viewBox="0 0 42 42" fill="none">
                                <g clip-path="url(#clip0_1_10)">
                                    <path d="M24.4942 15.5542L26.0926 17.1233L10.3513 32.5747H8.75286V31.0057L24.4942 15.5542ZM30.749 5.28735C30.3146 5.28735 29.8629 5.4579 29.5328 5.78194L26.3532 8.90293L32.8687 15.2984L36.0482 12.1774C36.7258 11.5123 36.7258 10.4378 36.0482 9.77272L31.9826 5.78194C31.6351 5.44084 31.2007 5.28735 30.749 5.28735ZM24.4942 10.7278L5.27795 29.5902V35.9857H11.7934L31.0096 17.1233L24.4942 10.7278Z" fill="#1C1C1C" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_10">
                                        <rect width="41.6988" height="40.9311" fill="white" transform="translate(0.0656128 0.170975)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href='#' className='icon1' >Edit Profile</a>
                        </div>
                        <div className='text-[-#000] flex items-center space-x-2 gap-5' style={{
                            color: '#858585',
                            fontFamily: 'Roboto',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px'
                        }}>
                            <IoNotificationsSharp  />
                            <a href='#' className='icon' >Notification </a>
                        </div>

                        <div className='text-[-#000] flex items-center space-x-2 gap-5' style={{
                            color: '#858585',
                            fontFamily: 'Roboto',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px'
                        }}>
                            <IoSettingsSharp />
                            <a href='#'className='icon'>Apperence</a>
                        </div>
                        <div className='text-[-#000] flex items-center space-x-2 gap-5' style={{
                            color: '#858585',
                            fontFamily: 'Roboto',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px'
                        }}>
                            <IoHelpSharp />
                            <a href='#' className='icon'>Help</a>
                        </div>



                    </div>
                </div>


                {/* Main Content */}
                <div className='right w-50 ml-20' style={{ height: "auto" }}>
                    <form className='p-4 flex flex-col'>
                        <h2 style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px', marginBottom: '20px'
                        }}>Edit Profile</h2>

                        <div className="flex items-center gap-5">
                            <div className="flex-grow">
                                <label htmlFor='firstName' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>First Name:</label> <br />
                                <input type='text' id='firstName' name='firstName' className="border-b" style={{ marginLeft: "10px" }} />
                            </div>
                            <div className="flex-grow">
                                <label htmlFor='lastName' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>Last Name:</label> <br />
                                <input type='text' id='lastName' name='lastName' className="border-b" style={{ marginLeft: "10px" }} />
                            </div>
                        </div>

                        <label htmlFor='email' style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px'
                        }}>Email:</label> <br />
                        <input type='email' id='email' name='email' className="border-b" style={{ marginLeft: "10px" }} />

                        <label htmlFor='bio' style={{
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 'normal',
                            display: 'flex',
                            marginLeft: '10px'
                        }}>Address:</label>
                        <textarea id='bio' name='bio' className="border-b" style={{ marginLeft: '10px' }}></textarea>
                        <div className="flex items-center gap-5">
                            <div className="flex-grow">
                                <label htmlFor='firstName' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>Contact Number:</label> <br />
                                <input type='text' id='contact-number' name='firstName' className="border-b" style={{ marginLeft: "10px", marginBottom: "5px" }} />
                            </div>
                            <div className="flex-grow">

                                <input type='text' id='optional' value="optional" name='lastName' className="border-b mt-5" style={{ marginLeft: "10px", marginTop: "40px" }} />
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex-grow">
                                <label htmlFor='city' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',


                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>City:</label> <br />
                                <select id='city' name='city' className="border-b" style={{ margin: '-15px 0px 0px 10px' }}>
                                    <option value="">Select Your City</option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                    {/* Add more city options */}
                                </select>
                            </div>
                            <div className="flex-grow gap-5">
                                <label htmlFor='state' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>State:</label> <br />
                                <select id='state' name='state' className="border-b" style={{ margin: '-15px 0px 0px 10px' }}>
                                    <option value="">Select Your State</option>
                                    <option value="state1">State 1</option>
                                    <option value="state2">State 2</option>
                                    {/* Add more state options */}
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <div className="flex-grow">
                                <label htmlFor='' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>Password:</label> <br />
                                <input type='password' id='password' name='password' className="border-b" style={{ marginLeft: "10px" }} />
                            </div>
                            <div className="flex-grow">
                                <label htmlFor='password' style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '15px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    display: 'flex',
                                    marginLeft: '10px'
                                }}>Confirm Password:</label> <br />
                                <input type='password' id='confirm-password' name='password' className="border-b" style={{ marginLeft: "10px" }} />
                            </div>
                        </div>
                        <div className="mt-10" style={{ marginLeft: "10px" }}>
                            <button type="button" style={{
                                width: '166.795px',
                                height: '50.421px',
                                flexShrink: '0',
                                borderRadius: '5px',
                                border: '2px solid #D6CB6B',
                                background: '#FFF',
                                color: '#D6CB6B',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal',
                                marginRight: '15px'
                            }}>
                                Cancel
                            </button>
                            <button type="submit" style={{
                                width: '166.795px',
                                height: '50.421px',
                                flexShrink: '0',
                                borderRadius: '5px',
                                border: '2px solid #D6CB6B',
                                background: '#D6CB6B',
                                color: '#FFF',
                                fontFamily: 'Roboto',
                                fontSize: '28px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 'normal'
                            }} >
                                Save
                            </button>
                        </div>



                    </form>
                    <hr style={{ backgroundColor: '#979797', margin: '20px 0px 20px 20px' }} />
                    <div className='flex' style={{ marginLeft: '12px' }}>
                        <div style={{
                            width: '215px',
                            height: '49px',
                            flexShrink: '0',
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '26px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',


                        }}>Notifications</div>
                        <div style={{ mt: '10px' }}> <IoNotificationsSharp style={{ width: '30px', height: '30px', marginLeft: "-60px", color: "rgba(133, 133, 133, 1)" }} /></div>
                    </div>
                    <div className='flex' style={{ marginLeft: '12px' }}>
                        <div style={{ margin: '-20px 12px 0px 0px', color: "#858585" }}>
                            Keep yourself updated with our latest collections by getting notified
                        </div>
                        <div className='disabled'>

                        </div>
                    </div>
                    <hr style={{ backgroundColor: '#979797', margin: '20px 0px 20px 20px' }} />
                    <div className='flex' style={{ marginLeft: '12px' }}>
                        <div style={{
                            width: '215px',
                            height: '49px',
                            flexShrink: '0',
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '26px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        }}>Appearance</div>
                        <div style={{ mt: '10px' }}> <IoSettingsSharp style={{ width: '30px', height: '30px', marginLeft: "-60px", color: "rgba(133, 133, 133, 1)" }} /></div>
                    </div>
                    <div className='flex' style={{ marginLeft: '14px' }}>
                        <div style={{ margin: '-20px 12px 0px 0px', color: "#858585" }}>
                            Slide right to switch on dark mode
                        </div>
                        <div className='disabled'>

                        </div>
                    </div>
                    <hr style={{ backgroundColor: '#979797', margin: '20px 0px 20px 20px' }} />
                    <div className='flex' style={{ marginLeft: '14px' }}>
                        <div style={{
                            width: '215px',
                            height: '49px',
                            flexShrink: '0',
                            color: '#000',
                            fontFamily: 'Roboto',
                            fontSize: '26px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        }}>Help</div>
                        <IoHelpSharp style={{ width: '30px', height: '30px', marginLeft: "-160px" }} />
                    </div>
                    <div className='flex' style={{ margin: '-20px 12px 0px 14px', color: "#858585" }} >
                        <div >
                            In case of any inconvenience contact us on : email id
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Settingpage;
