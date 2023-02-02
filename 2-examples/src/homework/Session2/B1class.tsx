import React, { Component } from "react";
import Styles from './B1.module.css';

type IProps = {
    title: string;
    bgTitle: string;
    pecent: number;
    bgProcess: string;
};


class ClassComponent2 extends Component<IProps> {
  
  render() {
    return (
        <div className="d-flex w-50 m-auto border">
      <div style={{ width: 100, backgroundColor: this.props.bgTitle }}>{this.props.title}</div>
      <div className={Styles.w__500} >
        <div style={{ width: `${this.props.pecent}%`, backgroundColor: this.props.bgProcess }}>
          {this.props.pecent}%
        </div>
      </div>
    </div>
     );
  
}
}
export default ClassComponent2;
