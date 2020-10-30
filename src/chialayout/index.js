import React from "react"
import Header from './header.js'
import Carousel from './carousel.js'
import BestCellPhone from './bestcellphone.js'
import BestLaptop from './bestlaptop.js'
import Promotion from './promotion.js'

export default function ChiaLayout(){
    return (
        <div>
            <Header/>
            <Carousel />
            <BestCellPhone/>
            <BestLaptop/>
            <Promotion/>
        </div>
    );
};