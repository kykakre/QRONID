import React from "react";
import styled from "styled-components";
import ChatBody from "./ChatBody";
import ChatTitle from "./ChatTitle";
import MessageNew from "./MessageNew";

export default function Chat(props) {
  const Container = styled.div`
    min-width: 680px;
    border: 1px solid #cbcbcb;
    border-radius: 20px;
    @media (max-width: 768px) {
      min-width: 550px;
    }
    @media (max-width: 576px) {
      min-width: 310px;
    }
  `;
  return (
    <Container>
      <ChatTitle props={props.props.titleChat} />
      <ChatBody props={props.props.message} />
      <MessageNew />
    </Container>
  );
}
