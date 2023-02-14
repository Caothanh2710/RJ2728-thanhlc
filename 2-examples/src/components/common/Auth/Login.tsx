import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const [userName, setUserName] = useState<string>();
  const [userPass, setUserPass] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit", userName, userPass);
    if (userName === "caothanh" && userPass === "caothanh") {
      alert("login thanh cong");
      setIsLogin(true);
    } else {
      alert("login fail");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.login}>
        <div className={styles.text}> Đăng nhập </div>
        <span className={styles.set}> 
        <div className="mb-3">
          <label form="exampleInputEmail1" className="form-label">
            ID
          </label>

          <input
            type="text"
            defaultValue={userName}
            onChange={(e) => {
              console.log(e.target.value);
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label form="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            defaultValue={userPass}
            onChange={(e) => {
              console.log(e.target.value);
              setUserPass(e.target.value);
            }}
          />
        </div>
        </span>
        <span className={styles.hop}>
        <button type="submit" className="btn btn-primary" >
          Login
        </button>
        </span>
        
      </form>
    </>
  );
};
export default Login;
