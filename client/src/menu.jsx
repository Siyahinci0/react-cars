import React from "react";
import Link from "next/link"

const Menu = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cars">
                <a className="nav-link">Cars</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/aboutus">
                <a className="nav-link">About Us</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/ford">
                <a className="nav-link">Ford</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/audi">
                <a className="nav-link">Audi</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/bmw">
                <a className="nav-link">Bmw</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/bentley">
                <a className="nav-link">Bentley</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/carsTwo">
                <a className="nav-link">carsTwo</a>
              </Link>
            </li>
            
            
          </ul>
        </div>
      </nav>

    )};

    export default Menu;