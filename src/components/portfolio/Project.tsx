import React, { Component } from "react";



export default class Project extends Component {
  render() {
    return (
      <div className="group relative w-[200px] hover:scale-125 ease-in duration-300">
        <img className="w-full rounded" src="assets/me_square.jpg" alt="me" />
        <button
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ease-in duration-100 bg-green text-deep-blue p-2 rounded font-monospace"
        >
          Learn more
        </button>
      </div>
    );
  }
}
