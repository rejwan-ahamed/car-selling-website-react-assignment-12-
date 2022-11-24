import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class>
      <div className="nav-main border-b font-general">
        <Navbar fluid={true} rounded={true} className="md:mx-20 lg:mx-20 xl:mx-40 bg-[#F6F7F9]">
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="/Images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              GariDhako.com
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="font-[500]">
            <Link to="/" active={true}>
              Home
            </Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/category">Category</Link>
            <Link to="/navbars">Wish List</Link>
            <Link to="/navbars">My orders</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
