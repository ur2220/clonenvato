import React from 'react'
import "./home.css";
import {BsStarFill} from "react-icons/bs"

export default function Home() {
    return (
        <>
            <div className="conthomepg">

                <div className="col-4 leftcont">

                    <div className="leftcontbox">
                        <div className='hmrating'>
                      <div className='stars'>  <BsStarFill size={35} color='#e95095'/></div> <div className='stars'>  <BsStarFill size={35} color='#e95095'/></div><div className='stars'>  <BsStarFill size={35} color='#e95095'/></div><div className='stars'>  <BsStarFill size={35} color='#e95095'/></div><div className='stars'>  <BsStarFill size={35} color='#e95095'/></div>
                        <p className='starrat'>4.88</p> 

                        </div>

                        <div className="leftcontparra">The #1 Best-Rated Top- <p>Selling</p>
                        <p>Shop Builder</p></div>

                        <div className="leftcontbtn">

                        <button className='leftbtnn'>START BUILDING</button> <button className='rightbtnn'>TEST DRIVE FREE</button>

                        
                        </div>
                        <div className="leftcontvist d-flex">
                            <div className='numbering ms-0'><p>100k+</p>
                            <span>Websits use Impreza</span></div>
                            <div className='numbering'><p>2.4k+</p>
                            <span>Average 5-Star Reviews</span></div>
                        </div>

                    </div>
                </div>

                
                <div className="col-7 rightcont"> 
                <div className="rtcontbox"><img src=" \images\hmmainpg_files\mainhmimg.jpg" alt="" /></div>

                </div>
            </div>
        </>
    )
}
