import React, { Component } from 'react'
import './Category.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaPhone, FaLaptop, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { BsCamera } from 'react-icons/bs';

export class Category extends Component {
  render() {
    return (
      <>

        <div className="category">

        <div className='today'>
            <h3>Category</h3>
        </div>

        <div className="Flash">
            <div>
                <h2>Browse By Category</h2>
            </div>

            <div className="arrow-icon">
                <FiArrowLeft className='left' />
                <FiArrowRight className='right' />    
            </div>
        </div>
        </div>
{/* category-card */}
<div className='category-card'>
    {/* section1 */}
  <div className='card2 show'>
    <FaPhone title="Phone" className='icon' />
    <h4>Phone</h4>
  </div>
 {/* section2 */}
  <div className='card2 show'>
    <BsCamera title="Camera" className='icon' />
    <h4>Camera</h4>
  </div>
 {/* section3 */}
  <div className='card2 show laptop'>
    <FaLaptop title="Laptop" className='icon laptop' />
    <h4>Laptop</h4>
  </div>
 {/* section4 */}
  <div className='card2 show'>
    <FaHeadphones title="Headphones" className='icon' />
    <h4>Headphones</h4>
  </div>
 {/* section5 */}
  <div className='card2 show'>
    <FaGamepad title="Gaming" className='icon' />
    <h4>Gaming</h4>
  </div>
 {/* section6 */}
   <div className='card2 show'>
    <BsCamera title="Camera" className='icon' />
    <h4>Camera</h4>
  </div>
<hr />
   
</div>



</>
    )
  }
}

export default Category