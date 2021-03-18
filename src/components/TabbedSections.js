import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
// import TabContent from "react-bootstrap/TabContent";
// import TabContainer from "react-bootstrap/TabContainer";
// import TabPane from "react-bootstrap/TabPane";
import Friends from "./Friends";
import {
  fetchOwnedBooks,
  fetchReadBooks,
  fetchWantBooks,
  cleanFetchedBooks,
  fetchAllPersonalBooksANDDispatch,
} from "../api-calls/internal-api";
// import { fetchPendingFriendRequests } from "../api-calls/friends-api";
import {
  saveOwnedBooks,
  saveReadBooks,
  saveWantBooks,
  setPendingReceivedFriendRequests,
  setPendingSentFriendRequests,
} from "../redux/actions/baseActions";
import Book from "./Book";
import BookModal from "./BookModal";
import WhoOwnsModal from "./WhoOwnsModal";
import * as S from "../styles/Styles";
import {
  fetchPendingFriendRequestsANDDispatchToRedux,
  fetchAllFriendRelationsIDsANDDispatch,
  fetchAllFriendsANDDispatch,
} from "../api-calls/friends-api";
import { Link } from "react-router-dom";

export default function TabbedSections() {
  const [key, setKey] = useState("friends");
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const ownedBooks = useSelector((state) => state.ownedBooks);
  const readBooks = useSelector((state) => state.readBooks);
  const wantBooks = useSelector((state) => state.wantBooks);

  useEffect(() => {
    (async () => {
      try {
        let ownedBooks = await cleanFetchedBooks(await fetchOwnedBooks());
        dispatch(saveOwnedBooks(ownedBooks));
        let readBooks = await cleanFetchedBooks(await fetchReadBooks());
        let wantBooks = await cleanFetchedBooks(await fetchWantBooks());
        dispatch(saveReadBooks(readBooks));
        dispatch(saveWantBooks(wantBooks));
      } catch (error) {
        console.error(error);
        console.log("There was an issue grabbing your books from the server!");
      }
    })();

    (async () => {
      await fetchPendingFriendRequestsANDDispatchToRedux();
      await fetchAllFriendRelationsIDsANDDispatch();
      await fetchAllFriendsANDDispatch();
    })();
  }, [token, dispatch]);

  return (
    <>
      <hr />
      <S.H2 className="mb-5">Dashboard</S.H2>
      <hr />
      <Tabs
        className="mb-5 siteFont"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="myBooks" title="My Books">
          <S.Grid className="mb-5">
            {ownedBooks != null && ownedBooks.length !== 0
              ? ownedBooks.map((book, index) => (
                  <Book
                    key={index}
                    book={{ ...book, index }}
                    onPersonalPage
                    tabKey={key}
                  />
                ))
              : null}
          </S.Grid>
          {ownedBooks == null || ownedBooks.length === 0 ? (
            <S.EmptyMessageCentered>
              <div style={{ marginBottom: "1.5rem", width: "max-content" }}>
                <strong>You haven't added any books you own!</strong>
              </div>
              <div>
                <Link to="/search">
                  <Button variant="outline-info">
                    Click here to search for any book!
                  </Button>
                </Link>
              </div>
            </S.EmptyMessageCentered>
          ) : null}
        </Tab>
        <Tab eventKey="readBooks" title="Books I've Read">
          <S.Grid className="mb-5">
            {readBooks != null && readBooks.length !== 0
              ? readBooks.map((book, index) => (
                  <Book
                    key={index}
                    book={{ ...book, index }}
                    onPersonalPage
                    tabKey={key}
                  />
                ))
              : null}
          </S.Grid>
          {readBooks == null || readBooks.length === 0 ? (
            <S.EmptyMessageCentered>
              <div style={{ marginBottom: "1.5rem", width: "max-content" }}>
                <strong>You haven't added any books you've read!</strong>
              </div>
              <div>
                <Link to="/search">
                  <Button variant="outline-info">
                    Click here to search for any book!
                  </Button>
                </Link>
              </div>
            </S.EmptyMessageCentered>
          ) : null}
        </Tab>
        <Tab eventKey="wantBooks" title="Books To Read">
          <S.Grid className="mb-5">
            {wantBooks != null && wantBooks.length !== 0
              ? wantBooks.map((book, index) => (
                  <Book
                    key={index}
                    book={{ ...book, index }}
                    onPersonalPage
                    tabKey={key}
                  />
                ))
              : null}
          </S.Grid>
          {wantBooks == null || wantBooks.length === 0 ? (
            <S.EmptyMessageCentered>
              <div style={{ marginBottom: "1.5rem", width: "max-content" }}>
                <strong>You haven't added any books you want to read!</strong>
              </div>
              <div>
                <Link to="/search">
                  <Button variant="outline-info">
                    Click here to search for any book!
                  </Button>
                </Link>
              </div>
            </S.EmptyMessageCentered>
          ) : null}
        </Tab>
        <Tab eventKey="friends" title="Friends">
          <Friends />
        </Tab>
      </Tabs>
      <BookModal />
      <WhoOwnsModal />
    </>
  );
}
