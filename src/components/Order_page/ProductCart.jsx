import React from 'react'
import Link from 'next/link'
function ProductCart({setState}) {
   return (
    <div onClick={()=>setState(false)}>
      <div  className='div flex gap-5' style={{width:"500px",justifyContent:"space-between"}}>
      <div style={{width:"200px",height:"100px",display:"flex",gap:"15px"}}>
       <div style={{width:"500px",height:"100px",backgroundColor:"gray",borderRadius:"5px"}}></div>
       <div>Saree <br /> Description</div>
      </div>
      <div style={{width:"100px",height:"100px"}}>
        2588.00 <br />
        Qty:1
        </div>
      </div>
     
    </div>
  )
}

export default ProductCart