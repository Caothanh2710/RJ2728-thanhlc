import React, { useState } from "react";

const Tg = () => {   
    const [numberSate, setNumberSate] = useState<number> (9)
    const tang = () => {
      console.log('tang');
     setNumberSate (numberSate + 1)
      
      
     
    const giam = () =>{
        console.log('giam');
        setNumberSate (numberSate - 1)
        

    }
    return (
      
   <div className=""> 

    <h1>{numberSate}</h1>
     <button onClick={tang}>tăng</button>
     <button onClick={giam}>giảm</button>

     </div>  

    );
  };
  }
  export default Tg;
  