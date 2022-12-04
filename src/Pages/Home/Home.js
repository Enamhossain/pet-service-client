import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Hero from '../../Share/Hero/Hero';
import MidSection from '../MidSection/MidSection';
import Pricing from '../Pricing/Pricing';
 import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Service></Service>
           <MidSection></MidSection>
           <Pricing></Pricing>
        </div>
    );
};

export default Home;