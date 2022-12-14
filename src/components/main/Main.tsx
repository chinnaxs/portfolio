import React, { Component } from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Portfolio from "./portfolio/Portfolio";
import Welcome from "./welcome/Welcome";
import Contact from "./contact/Contact";

export default class Main extends Component {
  render() {
    return (
      <div className="bg-deep-blue">
        <main className="relative">
          <section id="welcome">
            <Welcome />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    );
  }
}
