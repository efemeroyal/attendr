import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Container from "./components/Container";
import ActionCards from "./components/ActionCards";
import StatsCards from "./components/StatsCards";
import Courses from "./components/Courses";
import Sessions from "./components/Sessions";

export default function App() {
  return (
    <>
      <Header role="Lecturer" name="Dr. Ahmad" roleID="STAFF001" />
      <Container>
        <ActionCards />
        <StatsCards />
        <MainContainer>
          <Courses />
          <Sessions />
        </MainContainer>
      </Container>
    </>
  );
}
