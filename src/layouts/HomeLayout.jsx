import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-2">
        <aside className="left text-white col-span-3"><LeftNavbar></LeftNavbar></aside>
        <section className="col-span-6">main content</section>
        <aside className="right col-span-3"><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
