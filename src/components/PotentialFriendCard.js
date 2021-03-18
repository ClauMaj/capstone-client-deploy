import React from "react";
import { Button, Card } from "react-bootstrap";
import capitalize from "../helper-functions/capitalize";
import {
  sendFriendRequest,
  acceptFriendRequest,
  fetchPendingFriendRequestsANDDispatchToRedux,
  fetchAllFriendRelationsIDsANDDispatch,
} from "../api-calls/friends-api";
import { useSelector } from "react-redux";

const PotentialFriendCard = ({ user }) => {
  const allFriendRelationIDs = useSelector(
    (state) => state.allFriendRelationIDs
  );
  // console.log(allFriendRelationIDs);

  // check friendship status
  let friendshipState = "notfriends";
  if (allFriendRelationIDs.allFriendIDs.includes(user.id)) {
    friendshipState = "alreadyfriends";
  } else if (allFriendRelationIDs.sentFriendRequestIDs.includes(user.id)) {
    friendshipState = "friendRequestSent";
  } else if (allFriendRelationIDs.receivedFriendRequestIDs.includes(user.id)) {
    friendshipState = "friendRequestReceived";
  }

  // render based on friendship status
  let showFriendshipStatus = "";
  if (friendshipState === "alreadyfriends") {
    showFriendshipStatus = (
      <Button variant="outline-info" disabled>
        Already friends
      </Button>
    );
  } else if (friendshipState === "friendRequestSent") {
    showFriendshipStatus = (
      <Button variant="outline-info" disabled>
        Friend request sent
      </Button>
    );
  } else if (friendshipState === "receivedFriendRequest") {
    showFriendshipStatus = (
      <div>
        <Button
          onClick={async () => {
            await acceptFriendRequest(user.id);
            await fetchAllFriendRelationsIDsANDDispatch();
            await fetchPendingFriendRequestsANDDispatchToRedux();
          }}
          className="mr-3"
          variant="outline-success"
          type="button"
        >
          Accept
        </Button>
        <Button variant="outline-danger" type="button">
          Decline
        </Button>
      </div>
    );
  } else if (friendshipState === "notfriends") {
    showFriendshipStatus = (
      <Button
        variant="info"
        onClick={async () => {
          await sendFriendRequest(user.id);
          // research the query and update state search results
          await fetchAllFriendRelationsIDsANDDispatch();
        }}
      >
        Send Friend Request
      </Button>
    );
  }
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          {capitalize(user.firstName)} {capitalize(user.lastName)}
        </Card.Header>
        <Card.Header>{user.email || user.googleAuth}</Card.Header>
        <Card.Body className="p-2">{showFriendshipStatus}</Card.Body>
      </Card>
    </>
  );
};

export default PotentialFriendCard;
