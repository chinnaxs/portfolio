import React, { Component } from "react";
import Modal from "react-modal";

export default class ProjectModal extends Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <div>
        <h2>Hello</h2>

        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </div>
    );
  }
}
