import React, { Component } from "react";
import { motion } from "framer-motion";

export type SkillBarProps = {
  label: string;
  percentage: number;
};

export default class SkillBar extends Component<SkillBarProps> {
  constructor(props: SkillBarProps) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-nowrap m-4">
        <p className="text-right mr-4 w-1/4">{this.props.label}</p>
        <div className="w-full self-center  bg-gray h-3">
          <motion.div
            className=" bg-deep-blue h-3"
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
