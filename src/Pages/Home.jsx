import React from 'react'
import Banner from '../Components/Banner'
import Title from '../Components/Title'



const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Title heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></Title>
    </div>
  )
}

export default Home