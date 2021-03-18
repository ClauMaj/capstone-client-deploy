import React from "react";
import { Modal, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/actions/baseActions";
import * as S from "../styles/Styles";
import {
  bookAddPost,
  bookDeleteRequestByDatabaseID,
  bookDeleteRequestByGoogleBookID,
  addBookToPersonalLists,
} from "../api-calls/internal-api";
import SaveButtons from "./SaveButtons";

const BookModal = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modalShow);
  const individBook = useSelector((state) => state.individBook);
  const tokenFromState = useSelector((state) => state.token);

  // const modalRef = React.useRef(null)
  const PLACEHOLDER_IMAGE =
    "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg";
  const NO_DATE = "N/A";

  let saveButtons;
  if (tokenFromState !== "") {
    saveButtons = <SaveButtons />;
  } else {
    saveButtons = null;
  }

  return (
    <>
      {individBook !== undefined && individBook.length !== 0 ? (
        <Modal
          key={individBook.id}
          // ref={modalRef}
          // animation={false}
          onHide={() => dispatch(toggleModal())}
          show={modalState}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{individBook.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ overflow: "auto", height: "70vh" }}>
            <Container>
              <Row>
                <Col xs={8} sm={8} md={8} lg={6}>
                  {individBook.imageLinks?.small ? (
                    <img
                      // height="292px"
                      key={`Media-${individBook.id}`}
                      src={individBook.imageLinks?.small}
                      alt={individBook.title}
                    />
                  ) : (
                    <S.PlaceholderDivImg
                      key={`Media-${individBook.id}`}
                      bgImage={PLACEHOLDER_IMAGE}
                    ></S.PlaceholderDivImg>
                  )}
                </Col>
                <Col xs={4} sm={4} md={4} lg={6}>
                  <p>{individBook.description}</p>
                  {individBook.publisher ? (
                    <p>Published By: {individBook.publisher}</p>
                  ) : (
                    <p>Published By: {NO_DATE}</p>
                  )}
                  {individBook.publishedDate ? (
                    <p>Publish Date: {individBook.publishedDate}</p>
                  ) : (
                    <p>Publish Date: {NO_DATE}</p>
                  )}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>{saveButtons}</Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};

export default BookModal;
