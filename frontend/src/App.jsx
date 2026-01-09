import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SessionCheck from "./components/SessionCheck";

export default function App() {
  return (
    <>
      <Header role="Lecturer" name="Dr. Ahmad" roleID="STAFF001" />
      <MainContainer>
        <SessionCheck />
      </MainContainer>
    </>
  );
}
