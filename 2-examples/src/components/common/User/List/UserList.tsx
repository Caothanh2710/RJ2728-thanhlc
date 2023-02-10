import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};
interface IUser {
  name: string;
  age: number;
  id: number | string;
}

const UserList = (props: Props) => {
    const navigate = useNavigate();
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
    navigate ('/detail/' + userId) ;
  };
  return (
    <>
    <h1 style={{textAlign : "center"}}>LIST</h1>
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
