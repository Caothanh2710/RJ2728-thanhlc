import { log } from "console";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};
interface IUser {
  name: string;
  age: number;
  id: number | string;
  img: string;
}

const UserList = (props: Props) => {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<Array<IUser>>([]);
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
  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate("/detail/" + userId);
  };

  const handleUpdate = (userId: string | number) => {
    navigate("/form/" + userId);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>LIST</h1>
      <table
        className="table table table-dark"
        style={{ margin: 50, width: 1200 }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col" style={{ textAlign: "center" }}>
              Img
            </th>
            <th scope="col" style={{ textAlign: "center" }}>
              Handle
            </th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item, index) => (
            <tr key={`user-${item.id}`}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td style={{ textAlign: "center" }}>
                <img
                  style={{ height: 100, width: "auto" }}
                  src={item.img}
                  alt=""
                />
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => handleUpdate(item.id)}>Update</button>
                <button onClick={() => handleDetail(item.id)}>Detail</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserList;
