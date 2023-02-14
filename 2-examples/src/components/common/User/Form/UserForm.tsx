import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserForm.module.css";
interface IProps {}
const ID = undefined;

const UserForm: React.FC = () => {
  let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userAge, setUserAge] = useState<string | number>();
  const [userImg, setUserImg] = useState<string>();

  useEffect(() => {
    if (params.id) getUser(params.id);
  }, []);
  const getUser = (userId: String) => {
    console.log(params.id);
    const url =
      "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUserName(data.name);
        setUserAge(data.age);
        setUserImg(data.img);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit", userName, userAge);
    if (params.id) {
      console.log("handleSubmit", updateUser);
      updateUser(userName, userAge, userImg);
    } else {
      console.log("handleSubmit", creatUser);
      creatUser(userName, userAge, userImg);
    }
  };

  const creatUser = (
    name: string | undefined,
    age: string | number | undefined,
    img: string | undefined
  ) => {
    const url = "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users";
    const data = {
      name: name,
      age: age,
      img: img,
    };
    fetch(url, {
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
  const updateUser = (
    name: string | undefined,
    age: string | number | undefined,
    img: string | undefined
  ) => {
    const url =
      "https://63a06c13e3113e5a5c3d3238.mockapi.io/Users/" + params.id;
    const data = {
      name: name,
      age: age,
      img: img,
    };
    fetch(url, {
      method: "PUT", // or 'PUT' (phải có phần tử header, body)
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

  return (
    <>
      <form className={styles.box} onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={userName}
          onChange={(e) => {
            console.log(e.target.value);
            setUserName(e.target.value);
          }}
        />
        <input
          type="number"
          defaultValue={userAge}
          onChange={(e) => {
            console.log(e.target.value);
            setUserAge(parseInt(e.target.value));
          }}
        />
        <input
          type="text"
          defaultValue={userImg}
          onChange={(e) => {
            console.log(e.target.value);
            setUserImg(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
