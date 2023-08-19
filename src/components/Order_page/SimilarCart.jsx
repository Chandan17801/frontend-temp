"useclient"
import React from 'react'
import { IoHeartSharp } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
function SimilarCart() {
    return (
        <div>

            <div style={{ width: "200px", height: "100px", display: "flex", gap: "15px" }}>
                <div style={{ width: "500px", height: "100px", backgroundColor: "gray", borderRadius: "5px",boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }}></div>
                <div>
                    <div style={{ width: "auto", height: "auto", display: "flex", gap: "5px" }}>
                        <p> <IoHeartSharp size={24} /></p>
                        <p><div className='AddToCartButton' style={{ backgroundColor: "#E0DB5C", padding: "5px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaPlus color="white" />
                        </div></p>
                    </div>
                    Saree <br /> <button style={{ backgroundColor: "rgba(184, 167, 12, 1)", padding: "0px 5px 0px 5px",borderRadius:"2px" }}>shop</button></div>
            </div>

        </div>
    )
}

export default SimilarCart