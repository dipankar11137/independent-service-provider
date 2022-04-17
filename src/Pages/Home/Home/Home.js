import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Subjects from '../Subjects/Subjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Subjects></Subjects>
            <Footer></Footer>
        </div>
    );
};

export default Home;