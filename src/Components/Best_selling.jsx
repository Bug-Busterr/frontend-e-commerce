import React, { Component } from 'react'
import './Best_selling.css'
import './Card.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { FaStar,FaHeart  } from 'react-icons/fa';

export class Best_selling extends Component {
  render() {
    return (
        <>
     <div className="containerr">

        <div className='today this-month'>
            <h3>This Month</h3>
        </div>

        <div className="Flash">
            <div>
                <h2>Best Selling Products</h2>
            </div>

            <div className="arrow-icon">
                <button className='veiw-btn'>View All </button>
            </div>
        </div>

       

          <div className='cards'>

  {/* Card 1 */}
  <div className='card1 show'>
    <div className='card-img'>
      <img src='/img/Frame 614.png' width='200px'/>
      <button className='card-btn'>Add to cart</button>
      <FaEye  className='eye-icon'/>
      <FaHeart  className='heart-icon'/>
      <span className='discount'>-20%</span>
    </div>

    <div className='img-details'>
      <h3>Havithv-G9 Gamped</h3>
      <div>
        <span className='price1'>$192</span>
        <span className='price2'>$140</span>
      </div>
      <div style={{ display: 'flex', gap: '5px', color: '#FFD700' }}>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className='card1 show'>
    <div className='card-img'>
      <img src='/img/Frame 613.png' width='200px'/>
      <button className='card-btn'>Add to cart</button>
      <FaEye  className='eye-icon'/>
      <FaHeart  className='heart-icon'/>
      <span className='discount'>-20%</span>
    </div>

    <div className='img-details'>
      <h3>Havithv-G9 Gamped</h3>
      <div>
        <span className='price1'>$192</span>
        <span className='price2'>$140</span>
      </div>
      <div style={{ display: 'flex', gap: '5px', color: '#FFD700' }}>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>
  </div>

  {/* Card 3*/}
  <div className='card1 show'>
    <div className='card-img'>
      <img src='/img/Frame 610.png' width='200px'/>
      <button className='card-btn'>Add to cart</button>
      <FaEye  className='eye-icon'/>
      <FaHeart  className='heart-icon'/>
      <span className='discount'>-20%</span>
    </div>

    <div className='img-details'>
      <h3>Havithv-G9 Gamped</h3>
      <div>
        <span className='price1'>$192</span>
        <span className='price2'>$140</span>
      </div>
      <div style={{ display: 'flex', gap: '5px', color: '#FFD700' }}>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>
  </div>

  {/* Card 4*/}
  <div className='card1 show'>
    <div className='card-img'>
      <img src='/img/imag.png' width='200px'/>
      <button className='card-btn'>Add to cart</button>
      <FaEye  className='eye-icon'/>
      <FaHeart  className='heart-icon'/>
      <span className='discount'>-20%</span>
    </div>

    <div className='img-details'>
      <h3>Havithv-G9 Gamped</h3>
      <div>
        <span className='price1'>$192</span>
        <span className='price2'>$140</span>
      </div>
      <div style={{ display: 'flex', gap: '5px', color: '#FFD700' }}>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>
    </div>
  </div>


</div>


     
    
    <div className='line'><hr/></div>




     </div>
      
      </>
    )
  }
}

export default Best_selling