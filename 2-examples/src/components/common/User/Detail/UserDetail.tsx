import { log } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};
interface IUser {
  name: string;
  age: number;
  id: number | string;
  img: string | undefined;
}
function UserDetail({}: Props) {
  let params = useParams();
  const [user, setUser] = useState<IUser>({
    name: "abc",
    age: 18,
    id: 4,
    img: "https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg",
  });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    console.log(params.id);
    const url =
      "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p> Name : {user.name} </p>
        <p> Age : {user.age} </p>
        <img src={user.img} alt="" />
      </div>
    </>
  );
}

export default UserDetail;
