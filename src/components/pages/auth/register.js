import React,  { useState } from "react";
import validator from "validator";
import { ButtonContainer } from "../button";
import { Form, Alert } from "react-bootstrap";
import axios from 'axios'

const RegisterForm = () => {
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber ] = useState("")
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let data = { fullName: fullName, email: email, password: password };
  
    axios.post("http://localhost:3010/user/register", data)
      .then((result) => {
        console.log("res", result.data)
      }).catch(err => {
        console.log(err)
      })
  
    setConformPassword("");
    setEmail("");
    setPassword("");
    setFullName("");
    setErrors([]);
  };

  return (
    <div>
      <Form id="form">
        <h1>
          register your self{" "}
          <span role="img" aria-label="leg">
            🤗
          </span>
        </h1>
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            placeholder="ex. pwn tiwari"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
          />
          <Form.Text className="text-muted">
            {fullName === "" ? (
              <p>
                your Name cant be blanke{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            ) : fullName.length > 20 ? (
              <p>
                {" "}
                fullName cannot contain more then 20 characters ‍
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            {validator.isEmail(email) ? (
              <p>
                " valid email formate{" "}
                <span role="img" aria-label="img">
                  ✅
                </span>
                "
              </p>
            ) : (
              <p>
                invalid email formate{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            )}
            We'll never share your email with anyone else.👮‍♂️
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicUserName">
          <Form.Label>contect number</Form.Label>
          <Form.Control
            placeholder="ex. pwn tiwari"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            autoComplete="off"
          />
          <Form.Text className="text-muted">
           
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">
            {password.length === 0 ? (
              <p>
                password can not be empty{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : password.length < 8 ? (
              <p>
                password must be 8 character long
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : password.length > 20 ? (
              <p>
                password cannot contain more then 20 characters
                <span role="img" aria-label="img">
                  ❌
                </span>{" "}
              </p>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="conform Password"
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
          />
          <Form.Text>
            {password !== conformPassword ? (
              <p>
                password not match{" "}
                <span role="img" aria-label="img">
                  ❌
                </span>
              </p>
            ) : null}
          </Form.Text>
        </Form.Group>

        {errors.length > 0 ? (
          <Alert variant="danger">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </Alert>
        ) : null}

        <ButtonContainer onClick={submitHandler}>
          sign Up / register
        </ButtonContainer>
      </Form>
    </div>
  );
};

export default RegisterForm;
