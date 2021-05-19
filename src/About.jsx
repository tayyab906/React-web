import React from 'react'
import web from './Images/2911.png';
import Common from './Commmon';

const About = () => {
    return (
       <>
       <Common name='welcome to about page'
       imgsrc={web}
       visit="/contact"
       btname="Contact Now" />
        </>
    )
};

export default  About;


