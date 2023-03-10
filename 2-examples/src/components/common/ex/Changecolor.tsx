import { Agent } from "https";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};
interface IUser {
  name: string;
  age: number;
  id: number | string;
}
// Cách để set màu cho 1 biến
function Changecolor(props: Props) {
  const [colorState, setColorState] = useState<string>("green");
  const [listUser, setListUser] = useState<Array<IUser>>([
    {
      name: "user 1",
      age: 18,
      id: 1,
    },
  ]);
  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    const url = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setListUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const createListUser = () => {
    const data = {};
    fetch("https://example.com/profile", {
      method: "POST", // or 'PUT' (phải có phần tử header, body)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (userId: string | number) => {
    console.log("handleDelete", userId);
    const url = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users/" + userId;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setListUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
  // const listUser = [
  //   {
  //     name: "user 1",
  //     age: 18,
  //   },
  //   {
  //     name: "user 2",
  //     age: 19,
  //   },
  //   {
  //     name: "user 3",
  //     age: 20,
  //   },
  // ];

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
          {/* <tr>
            <th scope="row">1</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>@mdo</td>
          </tr> */}
          {listUser.map((item, index) => (
            <tr key={`user-${item.id}`}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <button>Detail</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Changecolor;
