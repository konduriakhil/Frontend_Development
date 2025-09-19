import React from "react";
import logo from "../assets/images/10.png";
import { Link } from "react-router-dom";
import dateInfo from "./dateInfo";

const Header = () => {
      return (
            <header id="header">
                  <div className="header">
                        <div className="logo">
                              <img src={logo} alt="logo.." />
                        </div>
                        <div className="mainmenu">
                              <ul className="menu">
                                    <li>
                                          <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                          <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                          <Link to='/contact'>Contact Us</Link>
                                    </li>
                                    <li>
                                          <Link to='/register'>Register Here</Link>
                                    </li>
                                    <li>
                                          <Link to='/todo'>Todo List</Link>
                                    </li>
                                    <li>
                                          <Link to='/trail'>Trail</Link>
                                    </li>
                                    <li>
                                          <Link to='/countera'>CounterA</Link>
                                    </li>
                                    <li>
                                          <Link to='/counterb'>CounterB</Link>
                                    </li>      
                              </ul>
                        </div>
                  </div>
            </header>
      );
};

export default dateInfo(Header);
