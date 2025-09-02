import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Info from "../components/Info"
import AboutInfo from "../components/aboutInfo"
import Employees from "../components/employees"
import Story from "../components/storySection"
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
