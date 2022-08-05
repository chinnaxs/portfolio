import React, { Component } from "react";
import { motion } from "framer-motion";

export type FadeProps = {
  children?: React.ReactNode;
};

export default class Fade extends Component<FadeProps> {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 100, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 10}}
      >
        {this.props.children}
      </motion.div>
    );
  }
}
