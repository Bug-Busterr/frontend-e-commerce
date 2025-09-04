import { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import Info from "../Components/Info"
import AboutInfo from "../Components/aboutInfo"
import Employees from "../Components/employees"
import Story from "../Components/storySection"
import "../styles/Home.css"

const About = () => {
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
          <h2>Loading About Page...</h2>
          <div className="loading-spinner"></div>
        </div>
      )
    }
    return (
    <div>
      <Navbar/>
      <Story/>
      <AboutInfo/>
      <Employees/>
      <Info/>
    </div>
  )
}

export default About
