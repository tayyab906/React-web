import React from 'react'
import Img from './Images/mainbenner.png';
import Commmon from './Commmon';

const Home = () => {
    return (
       <>
       <Commmon 
       name='Grow your business with'
       imgsrc={Img}
       visit="/service"
       btname="Get Started"
       />
      </>
    )
};

export default  Home;


