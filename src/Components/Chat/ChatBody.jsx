import React from "react";
import styled from "styled-components";
import Message from "./Message";

export default function ChatBody(props) {
  let item = props.props.map((e) => (
    <Message
      timeMessage={e.timeMessage}
      bodyMessage={e.bodyMessage}
      key={e.timeMessage}
    />
  ));
  const Body = styled.div`
    height: 420px;
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 40px;
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: flex-end;

    &::-webkit-scrollbar {
      background: transparent;
    }
  `;
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;
  return (
    <Body>
      <Flex>{item}</Flex>
    </Body>
  );
}
