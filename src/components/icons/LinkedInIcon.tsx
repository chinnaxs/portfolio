import React, { Component } from 'react';

export type GithubIconProps = {
  size?: string;
}

export default class LinkedInIcon extends Component<GithubIconProps> {
  static defaultProps = {
    size: "20"
  }

  render() {
    return (
      <>
        <a
          href="https://www.linkedin.com/in/matthias-lei/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"
            alt="LinkedIn"
            width={this.props.size}
            height={this.props.size}
            // style={{ width: 20, height: 20 }}
          />
        </a>
      </>
    )
  }
}