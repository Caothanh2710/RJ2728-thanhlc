import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserDetail from "./Detail/UserDetail";
import UserForm from "./Form/UserForm";
import UserList from "./List/UserList";

function RouterWeb() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/">List</Link>
          </div>
        </nav>

        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/form">Form</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/detail/:id" element={<UserDetail />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/form/:id" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterWeb;
