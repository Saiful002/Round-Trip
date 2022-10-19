import React from 'react'
import Carousel from './Carousel/Carousel'
import Destination from './Destination/Destination'
import DynamicIcon from './DynamicIcon/DynamicIcon'
import Footer from './Footer/Footer'
import LiveVideo from './LiveVideo/LiveVideo'
import Navbar from './Navbar/Navbar'
import Places from './Places/Places'
import Query from './Query/Query'
import Subscribe from './Subscribe/Subscribe'
import Trips from './Trip/Trips'


const Home = () => {
  return (
   <div>
     <Navbar></Navbar>
     <Carousel></Carousel>
     <Query></Query>
     <Destination></Destination>
    <Subscribe></Subscribe>
    <Places></Places>
    <LiveVideo></LiveVideo>
   <DynamicIcon></DynamicIcon>
   <Trips></Trips>
   <Footer></Footer>
   
    
   </div>
    
  )
}

export default Home