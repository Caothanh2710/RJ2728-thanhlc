import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Session from "./homework/Session2/B1";
import Changecolor from "./components/common/ex/Changecolor";
import Tabs from "./components/common/TABS/Tabs";
import UserDetail from "./components/common/User/Detail/UserDetail";
import RouterWeb from "./components/common/User/RouterWeb";
import UserForm from "./components/common/User/Form/UserForm";
import Login from "./components/common/Auth/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {/* <Session /> */}
      {/* <Changecolor /> */}
      {/* <Tabs /> */}
      {/* < UserForm /> */}
      {/* <UserDetail /> */}
      {/* <RouterWeb /> */}
      {isLogin ? (
        <RouterWeb setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}

      {/* <RouterWeb  setIsLogin={function (value: boolean): void {
        throw new Error('Function not implemented.');
      } } /> 
       */}

      {/* <Login setIsLogin={function (value: boolean): void {
        throw new Error('Function not implemented.');
      } } /> */}
    </>
  );
}

export default App;
