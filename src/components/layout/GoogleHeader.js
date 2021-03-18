import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import * as S from "../../styles/Styles";
import Avatar from "../../styles/images/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import {
  saveToken,
  saveGoogleImg,
  setGoogleAuth,
} from "../../redux/actions/baseActions";
import { useHistory } from "react-router-dom";

export default function GoogleHeader() {
  const profileImage = useSelector((state) => state.profileImage);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(saveToken({ token: "", firstName: "", lastName: "" }));
    dispatch(saveGoogleImg(""));
    dispatch(setGoogleAuth(false));
    history.replace("/");
  };

  return (
    <>
      <Nav.Link className="mt-3 mr-4" as={Link} to="/search">
        Book Search
      </Nav.Link>
      <Nav.Link className="mt-3 mr-4" as={Link} to="/about">
        About The App
      </Nav.Link>
      <div style={{ width: "95px" }}>
        <NavDropdown
          className="mr-4 menu"
          align="none"
          eventkey={1} //Causing Error in Console//
          title={
            <S.GoogleImage className="pull-left" style={{ display: "inline-block" }}>
              <S.RoundImageHeader
                className="thumbnail-image"
                src={profileImage || Avatar}
                alt="user pic"
                height="50px"
              />
            </S.GoogleImage>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item as={Link} to="/">My DashBoard</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogout}>
            Logout
        </NavDropdown.Item>

        </NavDropdown>
      </div>

    </>
  );
}
