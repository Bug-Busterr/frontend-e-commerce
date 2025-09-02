import '../styles/newArrivalSection.css'
import ps5 from '../assets/images/ps5.png'
import frame685 from '../assets/images/Frame 685.png'
import frame686 from '../assets/images/Frame 686.png'
import frame687 from '../assets/images/Frame 687.png'

const NewArrivals = () => {
  const newArrivalsData = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: ps5,
  },
  {
    id: 2,
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    image: frame685
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: frame686
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: frame687
  }
]

  return (
    <section className="new-arrival-section">
      <span className='featured-tag'>Featured</span>
      <h2 className="section-title">New Arrival</h2>

      <div className="arrival">
        <div className="big-card">
          <img src={newArrivalsData[0].image} alt={newArrivalsData[0].title} />
          <div className="card-content">
            <h3 className="card-title">{newArrivalsData[0].title}</h3>
            <p className="card-desc">{newArrivalsData[0].description}</p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>

        <div className="small-cards">
          <div className="small-card-top">
            <img src={newArrivalsData[1].image} alt={newArrivalsData[1].title} />
            <div className="card-content">
              <h3 className="card-title">{newArrivalsData[1].title}</h3>
              <p className="card-desc">{newArrivalsData[1].description}</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>

          <div className='small-cards-bottom'>
            <div className="small-card">
              <img src={newArrivalsData[2].image} alt={newArrivalsData[2].title} />
              <div className="card-content">
                <h3 className="card-title">{newArrivalsData[2].title}</h3>
                <p className="card-desc">{newArrivalsData[2].description}</p>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>

            <div className="small-card">
              <img src={newArrivalsData[3].image} alt={newArrivalsData[3].title} />
              <div className="card-content">
                <h3 className="card-title">{newArrivalsData[3].title}</h3>
                <p className="card-desc">{newArrivalsData[3].description}</p>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
