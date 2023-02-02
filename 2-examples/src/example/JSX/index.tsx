import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";


function JSX() {
  return (
    <>
         <header className="div_header">
        <h3> The pupik Rock</h3>
      </header>
      
      <div className="row">
        <div className="col">
          <p className="div_the">The Drive</p>
          <p className="div_the">The Walk</p>
          <p className="div_the">The Return</p>
          <p className="div_the">The End</p>
        </div>
        <div className="col">
          <h1>The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <img src="https://i.pinimg.com/originals/d6/e0/c3/d6e0c3b766394a228edfb1b2d76d8bc8.jpg" alt="" />
        </div>
        <div className="col">
          <div className="div_right">
            <h2>What?</h2>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h2>Where?</h2>
            <p>The Pulpit Rock is in Norway</p>
            <h2>Price?</h2>
            <p>The walk is free!</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="div_footer">
          <p>
            This web page is a part of a demonstration of fluid web design made
            by www.w3schools.com. Resize the browser window to see the content
            response to the resizing.
          </p>
        </div>
      </footer>
    </>
  );
}

export default JSX;
