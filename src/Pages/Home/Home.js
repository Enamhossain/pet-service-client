import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Hero from '../../Share/Hero/Hero';
import MidSection from '../MidSection/MidSection';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Service></Service>
           <MidSection></MidSection>
           <Footer></Footer>
        </div>
    );
};

export default Home;