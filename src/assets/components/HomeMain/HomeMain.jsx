import React from 'react';
import Banner from '../Banner/Banner';
import Chef from './Chef/Chef';
import OtherBranch from '../OtherBranch/OtherBranch';
import Dishes from '../Dishes/Dishes';



const HomeMain = () => {
    return (
        <div>
            {/* className='bg-[#FAF8F9]' */}
           <Banner></Banner>
           <Chef></Chef>
           <OtherBranch></OtherBranch>
           <Dishes></Dishes>
        </div>
    );
};

export default HomeMain;