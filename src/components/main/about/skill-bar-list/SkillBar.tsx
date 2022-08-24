import React, { Component } from "react";
import { motion } from "framer-motion";

export type SkillBarProps = {
  label: string;
  percentage: number;
};

export default class SkillBar extends Component<SkillBarProps> {

  render() {
    return (
      <div className="flex flex-col md:flex-row w-full my-3">
        <p className="text-left md:text-right mr-4 md:w-1/5 font-monospace text-white">{this.props.label}</p>
        <div className="w-full md:w-4/5 self-center bg-gray h-1">
          <motion.div
            className=" bg-green h-1"
            viewport={{ once: true }}
            initial={{ width: "0%" }}
            whileInView={{
              width: `${Math.min(Math.max(0, this.props.percentage), 100)}%`,
            }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
    );
  }
}
