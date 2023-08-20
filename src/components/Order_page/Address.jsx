import React from 'react'
import green from '../../assets/green.jpg'
import Image from 'next/image'
function Address() {

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-around", width: "auto", margin: "auto" }}>
        <p style={{
          color: 'var(--success-500, #12B76A)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '19.134px'
        }}>Order Confirmed</p>
        <p style={{
          color: 'var(--success-500, #12B76A)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '19.134px'
        }}>Shipped</p>
        <p>Out For Delivery</p>
        <p>Delivered</p>

      </div>
      <div style={{
        display: "flex",
        margin: "auto"
      }}>
        <div style={{ marginLeft: "150px", display: "flex" }}>
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <Image src={green} alt="" style={{ marginRight: "5px" }} />
          <svg xmlns="http://www.w3.org/2000/svg" width="238" height="9" viewBox="0 0 238 9" fill="none">
            <rect width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="31" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="62" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="93" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="124" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="155" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="186" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="217" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect width="21" height="9" rx="4.5" fill="#C4C4C4" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="238" height="9" viewBox="0 0 238 9" fill="none" style={{ marginLeft: "10px" }}>
            <rect width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="31" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="62" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="93" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="124" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="155" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="186" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect x="217" width="21" height="9" rx="4.5" fill="#C4C4C4" />
            <rect width="21" height="9" rx="4.5" fill="#C4C4C4" />
          </svg>
        </div>
        <div>

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "20px" }}>
        <p style={{
          color: 'var(--success-500, #12B76A)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '19.134px'
        }}>Wed, 1 lth Jan</p>
        <p style={{
          color: 'var(--success-500, #12B76A)',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '19.134px'
        }}>Wed, 1 lth Jan</p>
        <p>Wed, 1 lth Jan</p>
        <p>Expected by, Mon 16th</p>

      </div>
      <button style={{ backgroundColor: "rgba(184, 167, 12, 1)", padding: "4px 8px 4px 8px", borderRadius: "5px" }}>Back Product</button>
      <div style={{ width: "70%", height: "200px", display: "flex", justifyContent: "space-between", margin: "auto" }}>

        <div> <h4 style={{
          color: '#D6CB6B',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20.501px'
        }}>Payment</h4> <br /> <h4 style={{
          color: '#667085',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '13.501px'
        }}>Visa **56</h4></div>
        <div style={{
          color: '#D6CB6B',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20.501px',
          marginRight: '150px'
        }}>Delivery <br /> <br /><div style={{
          color: '#667085',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400'

        }}>Address<br />Street: 2, The Mall, Station Road, Malad (west)<br></br> City: Mumbai <br></br>State/province/area: Maharashtra <br></br>Phone number 02228803089 <br></br>Zip code 400064<br></br> Country calling code +91 Country India</div></div>

      </div>

      <div style={{ width: "500px", height: "200px", display: "flex", justifyContent: "space-between", width: "70%", margin: "auto" }}>
        <div style={{
          color: '#D6CB6B',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',

        }}>Need Help
          <div style={{
            color: '#667085',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400'

          }}>Order Issues <br />Delivery Info <br />Track Order</div>
        </div>
        <div style={{ width: "500px", height: "200px", justifyContent: "space-between" }}>
          <div style={{
            color: '#D6CB6B',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20.501px'
          }}>Order Summary </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
            <p>Subtotal</p> <p>3456</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
            <p>Discount</p> <p>- 119.40</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
            <p>Delivery</p> <p>$0.00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
            <p>Tax</p> <p>+221.88</p>
          </div>
          <br />
          <hr style={{ color: "black", fontWeight: "bold", textAlign: "center" }} /> <br />
          <div style={{ display: "flex", width: "300px", backgroundColor: "black", color: "yellow", height: "50px" }}>
            <div style={{ margin: "auto", width: "95%", display: "flex", justifyContent: "space-between" }}> <p>Total</p> <p>2230.00</p></div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Address
