import React from "react";
import Header from "../components/header/Header";
import "./pages.css";

const About = () => {
  return (
    <>
      <Header />
      <section className="about">
        <div>
          <h1>My name is Danny</h1>
          <h2>contact: kosmofly@gmail.com</h2>
        </div>
      </section>
    </>
  );
};

export default About;
