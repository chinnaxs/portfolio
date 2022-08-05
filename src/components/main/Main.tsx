import React, { Component } from "react";
import About from "../main/about/About";
import Blog from "../main/blog/Blog";
import Portfolio from "../main/portfolio/Portfolio";
import Welcome from "../main/welcome/Welcome";

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
        </main>
      </div>
    );
  }
}
