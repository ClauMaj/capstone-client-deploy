import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import capitalize from "../helper-functions/capitalize";
import * as S from "../styles/Styles";
import FriendsBook from "./FriendsBook";

const FriendCard = ({ friend }) => {
  const [showOwnedBooks, setShowOwnedBooks] = useState(false);
  const [showReadBooks, setShowReadBooks] = useState(false);
  const [showWantBooks, setShowWantBooks] = useState(false);
  let { user } = friend;
  let { owner, ReadBooks, WantToReadBooks } = user;
  return (
    <>
      <Card className="text-center mt-2 mb-3">
        <Card.Header>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center"
              md={3}
            >
              {capitalize(user.firstName)} {capitalize(user.lastName)}
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center"
              md={3}
            >
              {user.email || user.googleAuth}
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center m-1 m-sm-0"
              md={2}
            >
              <S.ClickP arrow={showOwnedBooks}
                onClick={(e) => {
                  setShowReadBooks(false);
                  setShowWantBooks(false);
                  setShowOwnedBooks(!showOwnedBooks);
                }}
              >
                Owned Books
              </S.ClickP>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center m-1 m-sm-0"
              md={2}
            >
              <S.ClickP arrow={showReadBooks}
                onClick={(e) => {
                  setShowOwnedBooks(false);
                  setShowWantBooks(false);
                  setShowReadBooks(!showReadBooks);
                }}
              >
                Read Books
              </S.ClickP>
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center m-1 m-sm-0"
              md={2}
            >
              <S.ClickP arrow={showWantBooks}
                onClick={(e) => {
                  setShowOwnedBooks(false);
                  setShowReadBooks(false);
                  setShowWantBooks(!showWantBooks);
                }}
              >
                Looking for
              </S.ClickP>
            </Col>
          </Row>
        </Card.Header>
        <Row className={showOwnedBooks ? "" : "d-none"}>
          <Col>
            <S.GridFriendsBooks>
              {(owner != null) & (owner.length !== 0) ? (
                owner.map((book, index) => (
                  <FriendsBook key={index} book={book.book} onPersonalPage />
                ))
              ) : (
                <div>{user.firstName} has not saved any owned books.</div>
              )}
            </S.GridFriendsBooks>
          </Col>
        </Row>
        <Row className={showReadBooks ? "" : "d-none"}>
          <Col>
            <S.GridFriendsBooks>
              {(ReadBooks != null) & (ReadBooks.length !== 0) ? (
                ReadBooks.map((book, index) => (
                  <FriendsBook key={index} book={book.book} onPersonalPage />
                ))
              ) : (
                <div>{user.firstName} has not saved any read books.</div>
              )}
            </S.GridFriendsBooks>
          </Col>
        </Row>
        <Row className={showWantBooks ? "" : "d-none"}>
          <Col>
            <S.GridFriendsBooks>
              {(WantToReadBooks != null) & (WantToReadBooks.length !== 0) ? (
                WantToReadBooks.map((book, index) => (
                  <FriendsBook key={index} book={book.book} onPersonalPage />
                ))
              ) : (
                <div>{user.firstName} has not saved any desired books.</div>
              )}
            </S.GridFriendsBooks>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default FriendCard;
