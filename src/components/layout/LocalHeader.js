import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { saveToken, saveGoogleImg } from "../../redux/actions/baseActions";
import { useHistory } from "react-router-dom";
import capitalize from "../../helper-functions/capitalize";

export default function LocalHeader() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedUser = useSelector((state) => state.loggedUser);

  const handleLogout = () => {
    dispatch(saveToken({ token: "", firstName: "", lastName: "" }));
    dispatch(saveGoogleImg(""));
    history.replace("/");
  };

  return (
    <>
      <Nav.Link className="mr-3" as={Link} to="/search">
        Book Search
      </Nav.Link>
      <Nav.Link className="mr-3" as={Link} to="/about">
        About The App
      </Nav.Link>

      <NavDropdown
        className="mr-3"
        title={capitalize(loggedUser.firstName)}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="/">My Dashboard</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
