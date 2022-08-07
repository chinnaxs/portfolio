import React, { Component } from "react";

import postMail from "../../../apis/herotofu";
import Fade from "../../reveal/Fade";
import FormError from "./FormError";
import Toast from "./toasts/Toast";
import { toast } from "react-toastify";

type ContactProps = {};

type ContactState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  firstNameMissing: boolean;
  lastNameMissing: boolean;
  emailMissing: boolean;
  emailInvalid: boolean;
  messageMissing: boolean;
};

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default class Contact extends Component<ContactProps, ContactState> {
  state: ContactState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    firstNameMissing: false,
    lastNameMissing: false,
    emailMissing: false,
    emailInvalid: false,
    messageMissing: false,
  };

  onSendButtonClicked = () => {
    console.log(this.state);

    this.setState({
      firstNameMissing: !this.state.firstName,
      lastNameMissing: !this.state.lastName,
      emailMissing: !this.state.email,
      emailInvalid: !!this.state.email && !this.isValidEmail(this.state.email),
      messageMissing: !this.state.message
    });

    if (
      this.state.firstNameMissing ||
      this.state.lastNameMissing ||
      this.state.emailMissing ||
      this.state.messageMissing ||
      this.state.emailInvalid
    ) {
      return;
    }

    let data: ContactFormData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.email
    }

    postMail(data).then((response) => {
      if (response.status == 200) {
        this.emitToastSuccess();
        return;
      }
      this.emitToastError();
    })
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  emitToastSuccess() {
    toast.success('Thank you for reaching out! I will get back to you as soon as possible!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  emitToastError() {
    toast.error('Message could not be delivered. Please try again later', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  
  }

  isValidEmail(input: string): boolean {
    let regexp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(input);
  }

  render() {
    return (
      <Fade>
        <div className="max-w-lg mx-auto pb-16">
          <div className="mx-8">
            <div className="mx-auto m-16">
              <h1 className="font-monospace text-white text-5xl text-center">
                contact
              </h1>
            </div>

            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    first Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ firstName: e.target.value })
                    }
                  />
                  <FormError show={this.state.firstNameMissing} msg="Please fill out this field" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white border border-white rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    value={this.state.lastName}
                    onChange={(e) =>
                      this.setState({ lastName: e.target.value })
                    }
                  />
                  <FormError show={this.state.lastNameMissing} msg="Please fill out this field" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    e-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-deep-blue border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                <FormError show={this.state.emailMissing} msg="Please fill out this field" />
                <FormError show={this.state.emailInvalid} msg="Please enter valid e-mail" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide font-monospace text-white text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-white text-deep-blue border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    value={this.state.message}
                    onChange={(e) => this.setState({ message: e.target.value })}
                  ></textarea>
                  <FormError show={this.state.messageMissing} msg="Please fill out this field" />
                </div>
              </div>
              <button
                className="block mx-auto bg-green hover:scale-110 ease-in duration-200 font-monospace text-deep-blue font-bold py-1 px-4 rounded"
                type="button"
                onClick={this.onSendButtonClicked}
              >
                Send
              </button>
              <Toast />
            </form>
          </div>
        </div>
      </Fade>
    );
  }
}
