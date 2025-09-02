import Header from '../Components/Header'
import Category from '../Components/Category'
import Best_selling from '../Components/Best_selling'
import Card1 from '../Components/Card1'
import Banner from '../Components/banner'
import Explore from '../Components/productSection'
import NewArrival from '../Components/newArrivalSection'
import Info from '../components/Info'
import { useState, useEffect } from "react"
import "../styles/Home.css"

const Home =()=>{
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
            <h2>Loading Home Page...</h2>
            <div className="loading-spinner"></div>
          </div>
        )
      }


    return (
      <>
      <Header/>
      <Card1/>
      <Category/>
      <Best_selling/>
      <Banner/>
      <Explore/>
      <NewArrival/>
      <Info/>
      </>
    )
  }

export default Home