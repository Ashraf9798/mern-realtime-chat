import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem(
      process.env.REACT_APP_LOCALHOST_KEY
    );

    if (!storedUser) return;

    const data = JSON.parse(storedUser);
    setUserName(data.username);
  }, []);

  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome{userName && <span>, {userName}!</span>}
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;

  img {
    height: 20rem;
  }

  span {
    color: #4e0eff;
  }
`;
