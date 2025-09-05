import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import ContactSection from "../Components/contactSection"

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }, [])
  
    if (isLoading) {
      return (
        <div className="app-loading">
          <h2>Loading Contact...</h2>
          <div className="loading-spinner"></div>
        </div>
      )
    }
    return (
    <div>
      <Navbar/>
      <ContactSection/>
    </div>
  )
}

export default Contact
