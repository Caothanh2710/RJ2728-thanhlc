import React, { useState } from "react";
import Styles from "./Tabs.module.css";


type Props = {};

const Tabs = (props: Props) => {
 const [text, setText] = useState ('')    
const onClickHistory = () => {
    console.log('red');
    

    
}
  return (
    <>
      <h4 className={`${Styles.tags}`}>BUTTON TABS</h4>
      <ul className="nav justify-content-center">
        <li >
         <button onClick={onClickHistory}> HISTORY </button>
         <p>{text}</p>
        </li>
        <li className="nav-item">
          <button>APPROACH</button>
        </li>
        <li className="nav-item">
          <button>CULTURE</button>
        </li>
        <li className="nav-item">
          <button>METHOD</button>
        </li>
      </ul>
    </>
  );
};
export default Tabs;


