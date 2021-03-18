import React from "react";
import { Container } from "react-bootstrap";
import * as S from "../styles/Styles";
import PotentialFriendCard from "./PotentialFriendCard";

const FriendsResults = ({ friendSearchResults }) => {
  return (
    <>
      <Container>
        <S.Grid>
          {friendSearchResults.map((user, index) => (
            <PotentialFriendCard key={index} user={user} />
          ))}
        </S.Grid>
      </Container>
    </>
  );
};

export default FriendsResults;
