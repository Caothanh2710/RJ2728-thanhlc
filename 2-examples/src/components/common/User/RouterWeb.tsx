import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import UserDetail from "./Detail/UserDetail";
import UserForm from "./Form/UserForm";
import UserList from "./List/UserList";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function RouterWeb(props: IProps) {
  const { setIsLogin} =props;
  return (
    <>
      <BrowserRouter>
          <Navigation setIsLogin={setIsLogin} />

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/detail/:id" element={<UserDetail />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/form/:id" element={<UserForm />} />
          <Route 
            path ='*'
            element = {
              <main style = {{padding : '1rem'}}>
                <p>404 Page not found </p>
                </main>
            }
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterWeb;
