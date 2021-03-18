import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  saveToken,
  saveGoogleImg,
  setGoogleAuth,
} from "../../redux/actions/baseActions";
import { toast } from "react-toastify";

const Registration = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerUser = "";
    try {
      registerUser = await axios.post("http://localhost:3005/register", {
        firstName: fName,
        lastName: lName,
        email,
        password,
      });
      toast.success(
        <div>
          Account successfully created. <br />
          Welcome to ReadMe BookSwap!
        </div>
      );
      history.replace("/login");
    } catch (err) {
      toast.warn(`${err.response.data.error}`);
    }
  };

  // google login
  const responseGoogle = async (response) => {
    let email = response.profileObj.email;
    let firstName = response.profileObj.givenName;
    let lastName = response.profileObj.familyName;
    let image = response.profileObj.imageUrl;
    let loginGoogleUser = await axios.post(
      "http://localhost:3005/googlesignin",
      { email, firstName, lastName }
    );
    dispatch(
      saveToken({
        token: loginGoogleUser.data.token,
        firstName: loginGoogleUser.data.firstName,
        lastName: loginGoogleUser.data.lastName,
      })
    );
    dispatch(saveGoogleImg(image));
    dispatch(setGoogleAuth(true));
    toast.success(`Welcome ${firstName}!`);
    history.replace("/");
  };

  const googleFail = async (err) => {
    toast.warn(`Something went wrong during google authentication.`);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            <div className="mt-5">Already Have an Account?</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ span: 4, offset: 4 }}>
            <GoogleLogin
              className="mr-3"
              clientId="837075299630-6jtpjjls23ddgp155v1g0ennvcihqubm.apps.googleusercontent.com"
              buttonText="Log In with Google"
              onSuccess={responseGoogle}
              onFailure={googleFail}
              cookiePolicy={"single_host_origin"}
            />
            <span>or</span>
            <Button className="ml-3" as={Link} to="/login">
              Log In
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registration;
