import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ButtonContainer } from "../button";
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let data = { email: email, password: password };


    axios.post("http://localhost:3010/user/login", data, { withCredentials: true })
      .then((result) => {
        console.log("res", result.data)

      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <div>
      <Form id="form">
        <h1>
          {" "}
          login to the system{" "}
          <span role="img" aria-label="log">
            🕵️‍♂️
          </span>
        </h1>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex. abc@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <ButtonContainer onClick={submitHandler}>Log-in</ButtonContainer>
      </Form>
    </div>
  );
};

export default Login;
