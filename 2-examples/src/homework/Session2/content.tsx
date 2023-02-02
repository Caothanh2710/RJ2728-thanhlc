import { log } from "console";
import Styles from "./B1.module.css";
import React, { useState } from "react";
interface IProps {
  title: string;
  bgTitle: string;
  pecent: number;
  bgProcess: string;
}
const Content: React.FC<IProps> = (props) => {
  const { title, bgTitle, pecent, bgProcess } = props;
  const [pecentSate, setPercentSate] = useState<number> (pecent)
  const onSet = () => {
    console.log(1);
    setPercentSate (pecentSate + 1)
    

  }
  
  return (
    
    <>
   <button onClick={onSet}>tăng</button>
   <button>giảm</button>
    <div className="d-flex w-50 m-auto border">
      <div style={{ width: 100, backgroundColor: bgTitle }}>{title}</div>
      <div className={Styles.w__500} >
        <div style={{ width: `${pecent}%`, backgroundColor: bgProcess }}>
          {pecent}%
        </div>
      </div>
    </div>
    </>
  );
};
export default Content;





 
