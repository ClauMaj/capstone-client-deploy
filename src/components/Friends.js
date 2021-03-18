import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FriendCard from "./FriendCard";
import * as S from "../styles/Styles";
import { Button, Form, Container, Card } from "react-bootstrap";
import FriendsResults from "./FriendsResults";
import {
  fetchUserSearchResults,
  acceptFriendRequest,
  fetchPendingFriendRequestsANDDispatchToRedux,
  fetchAllFriendRelationsIDsANDDispatch,
} from "../api-calls/friends-api";

import { setPotentialFriendsSearchResults } from "../redux/actions/baseActions";

const Friends = () => {
  const [searchText, setSearchText] = useState("");
  const [searchFriends, setSearchFriends] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);
  const pendingSentFriendRequests = useSelector(
    (state) => state.pendingSentFriendRequests
  );
  const friendsResults = useSelector((state) => state.friends);
  const pendingReceivedFriendRequests = useSelector(
    (state) => state.pendingReceivedFriendRequests
  );

  const dispatch = useDispatch();

  const searchResults = useSelector(
    (state) => state.potentialFriendsSearchResults
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetchUserSearchResults(searchText);
      await fetchAllFriendRelationsIDsANDDispatch();
      dispatch(setPotentialFriendsSearchResults(response.data));
      console.log(response);
    } catch (err) {
      dispatch(setPotentialFriendsSearchResults([]));
      console.error(err);
    }
    setSearchFriends(true);
  };

  const handleClear = () => {
    setSearchFriends(false);
    setSearchText("");
  };

  let searchResultsDisplay;

  if (searchFriends === true) {
    searchResultsDisplay = (
      <FriendsResults friendSearchResults={searchResults} />
    );
  } else {
    searchResultsDisplay = null;
  }

  // Displaying received pending friend requests

  return (
    <>
      <Container className="mb-5">
        <S.Grid>
          {pendingReceivedFriendRequests != null &&
          pendingReceivedFriendRequests.length !== 0
            ? pendingReceivedFriendRequests.map(
                (
                  {
                    fromUserID,
                    fromUserFirstName,
                    fromUserLastName,
                    fromUserEmail,
                  },
                  index
                ) => (
                  <Card
                    key={index}
                    style={{ maxWidth: 300, height: "max-content" }}
                    className="text-center"
                  >
                    <Card.Header
                    // style={{
                    //   height: "100%",
                    //   display: "flex",
                    //   flexDirection: "column",
                    //   justifyContent: "space-between",
                    // }}
                    >
                      <S.H5>
                        You have a friend request from {fromUserFirstName}{" "}
                        {fromUserLastName}
                      </S.H5>
                      <S.H5>@: {fromUserEmail}</S.H5>
                      <div>
                        <Button
                          onClick={async () => {
                            await acceptFriendRequest(fromUserID);
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
                    </Card.Header>
                  </Card>
                )
              )
            : null}
        </S.Grid>

        <S.H4>Find New Friends</S.H4>
        <Form className="justify-content-center" onSubmit={handleSubmit} inline>
          <S.Grid>
            <input
              value={searchText}
              type="text"
              id="search"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
              style={{ padding: "0 0.55rem" }}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
            <Button onClick={handleClear} variant="outline-info" type="button">
              Clear
            </Button>
          </S.Grid>
        </Form>
        {searchResultsDisplay}
        <S.H2 className="mt-5 mb-5">Your Friends</S.H2>
        <Container>
          {friendsResults != null && friendsResults.length !== 0
            ? friendsResults.map((friend, index) => (
                <FriendCard key={index} friend={friend} />
              ))
            : null}
        </Container>
      </Container>
    </>
  );
};

export default Friends;
