import { useState, useEffect } from 'react'


import { Link  } from "react-scroll";

export default function Menu() {
  
    return (
        <nav
          className="navbar navbar-expand-lg navbar-light navbar-warpper"
      
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/assets/.png" width="150" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto m-auto  mb-lg-0">
                <li className="nav-item h_nav-item">
                  <Link
                    activeClass="active"
                    to="hero"
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-link h_nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item h_nav-item">
                  <a
                    href="/ "
                    target="_blank"
                    className="nav-link h_nav-link"
                  >
                    about
                  </a>
                </li>

                <li className="nav-item h_nav-item">
                  <Link
                    activeClass="active"
                    to="feature"
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-link h_nav-link"
                  >
                    Feature
                  </Link>
                </li>
                <li className="nav-item h_nav-item">
                  <Link
                    activeClass="active"
                    to="roadmap"
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-link h_nav-link"
                  >
                    Road Map
                  </Link>
                </li>
                <li className="nav-item h_nav-item">
                  <Link
                    activeClass="active"
                    to="tokenomics"
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-link h_nav-link"
                  >
                    Feature
                  </Link>
                </li>

                <li className="nav-item h_nav-item">
                  <Link
                    activeClass="active"
                    to="faqs"
                    delay={100}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="nav-link h_nav-link"
                  >
                    FAQ
                  </Link>
                </li>
                {/* <li className="nav-item h_nav-item">
                  <a className="nav-link h_nav-link ">
                    <img src="assets/playstore.svg"  alt="" />
                  </a>
                </li>
                <li className="nav-item h_nav-item ">
                  <a className="nav-link h_nav-link ">
                    <img src="assets/applestore.svg" alt="" />
                  </a>
                </li> */}
              </ul>
              <span className="navbar-text">
                <a className="nav-btn  m-auto " target='_blank' href="">Play Game</a>
              </span>
            </div>
          </div>
        </nav>
    )
}