import React, { Component } from "react";

import About from "./about/About";
import Blog from "./blog/Blog";
import Header from "./header/Header";
import Portfolio from "./portfolio/Portfolio";
import Welcome from "./welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <div className="bg-deep-blue">
        <Header />
        <main className="relative ">
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
