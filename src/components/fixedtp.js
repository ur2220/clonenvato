import React from 'react';
import { Link } from "react-router-dom";
import "./fixedtp.css";


export default function Fixedtp() {
  return (
    <>
      <div className="toppestone">

        <div className="topbrndimg">
          <Link> <img src="/images/topbrandimg.png" alt="error" /></Link>
        </div>

        <button className='topbtn'>Buy Now</button>

      </div>

    </>
  )
}
