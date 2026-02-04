import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Outlet />   {/* 🔥 THIS IS THE KEY FIX */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
