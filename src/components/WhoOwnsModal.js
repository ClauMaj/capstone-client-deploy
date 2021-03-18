import React from "react";
import { toggleWhoOwnsModal } from "../redux/actions/baseActions";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PotentialFriendCard from "./PotentialFriendCard";

const WhoOwnsModal = () => {
  const individBook = useSelector((state) => state.whoownsit.book);
  const oldIndividBook = useSelector((state) => state.individBook);

  const bookOwners = useSelector((state) => state.whoownsit.allOwners);
  const modalState = useSelector((state) => state.whoOwnsModalShow);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        key={individBook.id}
        onHide={() => dispatch(toggleWhoOwnsModal())}
        show={modalState}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "lightgray" }} closeButton>
          <Modal.Title>
            Owners of {individBook ? individBook.title : oldIndividBook}:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "lightgray",
            overflow: "auto",
            height: "70vh",
          }}
        >
          {bookOwners.map((friend, index) => (
            <div key={index}>
              <PotentialFriendCard user={friend} />
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "lightgray" }}>
          <Button
            variant="secondary"
            onClick={() => dispatch(toggleWhoOwnsModal())}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WhoOwnsModal;
