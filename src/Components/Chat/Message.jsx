import React from "react";
import styled from "styled-components";
import MessageItem from "./MessageItem";
export default function Message(props) {
  let message = props.bodyMessage.map((e) => (
    <MessageItem
      id={e.id}
      key={e.id}
      avtor={e.avtor}
      iconAvtor={e.iconAvtor}
      message={e.message}
      time={e.time}
    />
  ));

  const Title = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 12px;
    color: #a0a0a0;
  `;
  const Body = styled.div``;
  return (
    <div>
      <Title>{props.timeMessage}</Title>
      <Body>{message}</Body>
    </div>
  );
}
