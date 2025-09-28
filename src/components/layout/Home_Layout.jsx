import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import Category from "../Category";
import { Outlet } from "react-router-dom";

const Home_Layout = () => {
  return (
    <div className="">
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <section>
        <Category></Category>
        <Outlet></Outlet>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home_Layout;
