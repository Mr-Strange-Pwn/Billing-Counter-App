import React, { useState } from "react";
import "./auth.css";
import Login from "./login";
import Register from "./register";
import AppDetail from "./appdetail";
import { ButtonContainer } from "../button";

const Authentication = () => {
  const [form, setForm] = useState("login");

  return (
    <div className="container">
      <div className="row">
        <div className="col m-4">
          {" "}
          <AppDetail />{" "}
        </div>
        <div className="col m-4">
          <ButtonContainer
            onClick={() =>
              form === "login" ? setForm("registration") : setForm("login")
            }>
            {form === "login" ? "register new user" : "log-in"}
          </ButtonContainer>
          {form === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
