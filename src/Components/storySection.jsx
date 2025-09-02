import Image from "../assets/images/Side Image.png"
import "../styles/storySection.css"

const storySection = () => {
  return (
    <div className='story-section' >
        <div className='our-story'>
            <h2>Our Story</h2>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

        <div className='image'>
            <img src={Image} alt='side image'></img>
        </div>
    </div>
  )
}

export default storySection
