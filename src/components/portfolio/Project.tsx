import React, { Component } from "react";
import Modal from 'react-modal';
import ProjectModal from "./ProjectModal";

export type ProjectProps = {
  label?: string;
  imgSrc?: string;
  imgDesc?: string;
  
}

export default class Project extends Component<ProjectProps> {
  static defaultProps = {
    label: "test label",
    imgSrc: "assets/me_square.jpg",
  }

  state = {
    showModal: false
  }

  showModal = () => {
    this.setState({
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="group relative max-w-[200px] hover:scale-125 ease-in duration-300">
        <img className="w-full rounded" src={this.props.imgSrc} alt="me" />
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 ease-in duration-100 bg-green text-deep-blue p-2 rounded font-monospace"
          onClick={this.showModal}
        >
          Learn more
        </button>
        <p className="text-white font-monospace font-bold text-center mt-2">{this.props.label}</p>
        <Modal
      isOpen={this.state.showModal}
      onRequestClose={this.closeModal}
      contentLabel="Example Modal"
    >
    <ProjectModal/>
    <button onClick={this.closeModal}>close</button>
    </Modal>
      </div>
    );
  }
}
