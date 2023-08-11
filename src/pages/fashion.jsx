import React from 'react'
import Image from 'next/image';
import Image1 from "../assets/images1.png";
import Product from '../components/Product';
const fashion = () => {
  return (
    <div>
      <div className='w-72  ml-5'>
        <p style={{ color: "#000", fontFamily: "Philosopher", fontWeight: "bold", fontSize: "20px" }}>Home / Clothing / Saree</p>
        <h3 className='ml-3' style={{ color: "#000", fontFamily: "Philosopher", fontWeight: "bold", fontSize: "20px" }}>Saree - 10491 items</h3>
      </div>
      <div className="flex">
        {/* Left Side Filter */}
        <div className="w-1/4  p-4">
          <h3 className="mb-4" style={{ color: "#000", fontFamily: "Biryani", fontWeight: "bold", fontSize: "20px" }}>Filter</h3>
          {/* Add your filter options here (combos, size, etc.) */}
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Breadcrumb */}
            <div className="w-72 flex ">
              <div className="flex items-center mr-3" style={{ border: "2px solid #888",color:"#888"  }}>
                <label htmlFor="sortBy" className="mr-2"></label>
                <select id="sortBy">
                  <option value="recommendation">Combos</option>
                  {/* Add other sorting options here */}
                </select>
              </div>
              <div className="flex items-center" style={{ border: "2px solid #888",color:"#888"  }}>
                <label htmlFor="sortBy" className="mr-2"></label>
                <select id="sortBy">
                  <option value="recommendation">Size</option>
                  {/* Add other sorting options here */}
                </select>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center" style={{ border: "2px solid #888",color:"#888" }}>
              <label htmlFor="sortBy" className="mr-2">Sort by:</label>
              <select id="sortBy">
                <option value="recommendation">Recommendation</option>
                {/* Add other sorting options here */}
              </select>
            </div>
          </div>

          {/* Main Content Items */}
          {/* Add your main content items here */}
        </div>
      </div>
      <div className="flex">
        {/* Left Div */}
        <div style={{ width: "20%", height: "1000px", border: " 2px solid #888" }} >
          {/* Content for left div */}
          <div style={{
            width: "80%", height: "100px", margin: "auto", color: "#000",
            fontFamily: "Biryani",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "400"
          }} >
            <p>CATEGORIES</p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="checkbox" /> Silk Saree (1063)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Cotton Saree (1328)
                </label>
              </div>
            </div>

          </div>
          <div style={{
            width: "80%", height: "100px", margin: "auto", color: "#000",
            fontFamily: "Biryani",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "400"
          }}>
            <p>BRAND</p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="checkbox" /> QRL (3522)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> XYZ (2606)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />ABC (2135)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> WER (1843)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />  RTY (1616)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> MNB (1448)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> ASD (1431)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> VBN (1345)
                </label>
              </div>
            </div>
            <h6 style={{ color: "red" }}>+ 650 more</h6>


          </div>


          <div style={{ width: "80%", height: "100px", margin: "auto", marginTop: "160px", fontFamily: "Biryani", fontSize: "17px", fontStyle: "normal", fontWeight: "400" }} >




            <p>PRICE  </p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 159 to Rs. 9120(1092)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 9120 to Rs. 18081(339)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />  Rs. 18081 to Rs. 27042(52)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Rs. 27042 to Rs. 36003(7)
                </label>
              </div>
            </div>

          </div>

          <div style={{ width: "80%", height: "100px", margin: "auto", marginTop: "100px", fontFamily: "Biryani", fontSize: "17px", fontStyle: "normal", fontWeight: "400" }} >
            <p>COLOR  </p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label >
                  <input type="radio" /> Black (15606)
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> Blue (13236)
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" />  White (12701)
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> Green (7150)
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> Grey (6298)
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> Red (5489)
                </label>
              </div>

            </div>

          </div>
          <h6 style={{ color: "red", marginTop: "70px", marginLeft: "40px" }}>+ 39 more</h6>
          <div style={{ width: "80%", height: "100px", margin: "auto", marginTop: "50px", fontFamily: "Biryani", fontSize: "17px", fontStyle: "normal", fontWeight: "400" }} >
            <p>DISCOUNT RANGE  </p>
            <div style={{ marginLeft: "6px" }}>
              <div>
                <label>
                  <input type="radio" />
                  10% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 20% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 30% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" /> 40% and above
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" />50% and above
                </label>
              </div>


            </div>

          </div>
        </div>
        {/* Right Div */}
        <div style={{ width: "80%", height: "1000px" }}>
          <div className="w-[80%] h-[900px] m-auto mt-8 flex flex-col items-center">
            {/* Heading */}

            {/* First Row */}
            <div className="flex justify-center gap-4 w-full mb-4">
              {/* Product 1 */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
             </div>

            {/* Second Row */}
            <div className="flex justify-center gap-4 w-full mb-4">
              {/* Product 1 */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
             </div>
             <div className="flex justify-center gap-4 w-full mb-4">
              {/* Product 1 */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default fashion