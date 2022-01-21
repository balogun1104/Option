import React from 'react';

import { useState } from 'react';
import Footer from '../../components/commonCodes/footer';
import Header from '../../components/commonCodes/header';
import TabOptions from '../../components/commonCodes/tabOptions';
import Delivery from '../../components/Delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';
import BookUs from '../../components/bookUs';

const Homepage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer />
            
        </div>
    );
};

const getCorrectScreen= (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "NightLife":
            return <NightLife />;
            case "Book Us":
                return <BookUs />;
        default:
            return <Delivery />
    }
}

export default Homepage
