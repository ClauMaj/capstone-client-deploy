import React, { useEffect, useState } from "react";
import {
  bookSearchByISBN,
  bookSearch,
  bookSearchByTitle,
  bookSearchByAuthor,
  addLargerImageLinks,
} from "../api-calls/3rd-party-apis";
import * as S from "../styles/Styles";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import BookModal from "./BookModal";
import WhoOwnsModal from "./WhoOwnsModal";
import { searchFunction } from "../redux/actions/baseActions";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  // const activateModal = useSelector((state) => state.activateModal);

  const search = () => {
    (async () => {
      try {
        let result = await bookSearchByTitle(searchText);
        console.log(result);
        dispatch(searchFunction(result.items));
      } catch (error) {
        dispatch(searchFunction([]));
        console.error(error);
        console.log("There must not be any results for that!");
      }
    })();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <>
      <div style={{ padding: 0, margin: 0 }}>
        <S.H2>Search for a book!</S.H2>
        <S.Form onSubmit={handleSubmit}>
          <input
            value={searchText}
            type="text"
            id="search"
            placeholder="Any Book!"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <Button className="ml-3" variant="outline-info" type="submit">
            Submit
          </Button>
        </S.Form>
        <div>
          <S.Grid>
            {searchResults?.map((book, index) => (
              <Book fromSearch key={index} book={{ ...book, index }} />
            ))}
          </S.Grid>
        </div>
      </div>
      {/* {activateModal ? <BookModal /> : null} */}
      <BookModal />
      <WhoOwnsModal />
    </>
  );
}
