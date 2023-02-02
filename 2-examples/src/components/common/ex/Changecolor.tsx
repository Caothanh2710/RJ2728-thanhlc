import { Agent } from "https";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

function Changecolor(props: Props) {
  const [colorState, setColorState] = useState<string>("green");
  const onClickRed = () => {
    setColorState("red");
  };
  const onClickBlue = () => {
    setColorState("blue");
  };
  const user = {
    name: "user object",
    age: 18,
  };
  const listUser = [
    {
      name: "user 1",
      age: 18,
    },
    {
      name: "user 2",
      age: 19,
    },
    {
      name: "user 3",
      age: 20,
    },
  ];

  return (
    <>
      <div style={{ color: colorState }}>Changecolor</div>
      <button onClick={onClickRed} disabled={colorState === "red"}>
        red
      </button>
      <button onClick={onClickBlue} disabled={colorState !== "red"}>
        blue
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>@mdo</td>
          </tr>
          {listUser.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index +  2}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>@fat</td>
            </tr>
          ))}
         </tbody>
      </table>
    </>
  );
}

export default Changecolor;
