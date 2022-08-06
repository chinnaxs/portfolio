import React, { Component } from "react";

type FormErrorProps = {
  show: boolean;
  msg: string;
};

export default class FormError extends Component<FormErrorProps> {
  render() {
    return (
      <>
        {this.props.show ? (
          <p className="text-purple text-xs italic">
            {this.props.msg}
          </p>
        ) : null}
      </>
    );
  }
}
