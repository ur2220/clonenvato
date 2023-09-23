import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className=" navbar navbar-expand-lg navheight bg-body-white">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">IMPREZA</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse " id="navbarSupportedContent">
              <div className="navulal">

                <ul className=" navul">
                  <li><Link>Demos</Link></li>
                  <li><Link>Elements</Link>
                    <ul className='submenu'>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                    </ul>
                  </li>
                  <li><Link>Pages</Link><ul className='submenu'>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      <li>pages</li>
                      
                    </ul></li>
                  <li><Link>Shop</Link><ul className='submenu'>
                      <li>shops</li>
                      <li>shops</li>
                      <li>shops</li>
                      <li>shops</li>
                      <li>shops</li>
                      
                    </ul></li>
                  <li><Link>Portfolio</Link><ul className='submenu'>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                      <li>Elements</li>
                    </ul></li>
                  <li><Link>Blog</Link></li>
                  <li><Link>Support</Link>
                  <ul className="submenuu">
                    <li>support</li>
                    <li>support</li>
                    <li>support</li>
                    <li>support</li>
                  </ul></li>
                </ul>
              </div>

            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
