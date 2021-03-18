import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "../styles/Styles";
import {
  addBookToPersonalLists,
  fetchAllUsersWhoOwnsBookANDDispatch,
} from "../api-calls/internal-api";
import { toggleWhoOwnsModal } from "../redux/actions/baseActions";

export default function SaveButtons() {
  const individBook = useSelector((state) => state.individBook);
  const dispatch = useDispatch();
  let whichID; // "google" or "database"
  let bookID;
  if (individBook.bookID != null) {
    whichID = "database";
    bookID = individBook.bookID;
  } else {
    whichID = "google";
    bookID = individBook.id;
  }
  return (
    <>
      <S.Button
        variant="success"
        key={`button4-${individBook.id}`}
        size="sm"
        onClick={() => {
          fetchAllUsersWhoOwnsBookANDDispatch(bookID, whichID);
          dispatch(toggleWhoOwnsModal());
        }}
      >
        Check who owns this book
      </S.Button>
      <S.Button
        variant="info"
        key={`button1-${individBook.id}`}
        size="sm"
        onClick={() => {
          addBookToPersonalLists(individBook, "owned");
        }}
      >
        I Own This Book
      </S.Button>
      <S.Button
        variant="info"
        key={`button2-${individBook.id}`}
        size="sm"
        onClick={() => {
          addBookToPersonalLists(individBook, "read");
        }}
      >
        I've Read This Book
      </S.Button>
      <S.Button
        variant="info"
        key={`button3-${individBook.id}`}
        size="sm"
        onClick={() => {
          addBookToPersonalLists(individBook, "want");
        }}
      >
        I Want To Read
      </S.Button>
    </>
  );
}
