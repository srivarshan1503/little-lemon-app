import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const HomePage = ({ navigate }) => (
    <main role="main">
        <CallToAction navigate={navigate} />
        <Specials />
        <CustomersSay />
        <Chicago />
    </main>
);

export default HomePage;
