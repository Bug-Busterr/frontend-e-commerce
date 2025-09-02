import "../styles/Info.css"
import item1 from "../assets/images/Services.png"
import item2 from "../assets/images/Services1.png"
import item3 from "../assets/images/Services2.png"


const ServiceInfo = () => {
  const services = [
  {
    icon: item1 ,
    title: 'Free And Fast Delivery',
    description: 'Free delivery for all orders over $140'
  },
  {
    icon: item2,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support'
  },
  {
    icon: item3,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days'
  }
]
  return (
    <section className="service-info">
      {services.map((service, index) => (
        <div key={index} className="service-box">
          
          <div className="service-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        
        </div>
      ))}
    </section>
  )
}

export default ServiceInfo
