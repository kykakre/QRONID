import React from "react";
import styled from "styled-components";

export default function MessageItem(props) {
  const Flex = styled.div`
    display: flex;
    align-items: flex-start;
    padding-bottom: 20px;
  `;
  const Icon = styled.img`
    width: 28px;
    height: 28px;
    object-fit: contain;
    margin-right: 10px;
  `;
  const Avtor = styled.div`
    font-weight: 600;
    font-size: 11px;
    color: #a0a0a0;
    margin-bottom: 5px;
  `;
  const Message = styled.div`
    font-size: 14px;
    display: flex;
    color: #000;
    padding: 12px;
    background: #f1f2f5;
    border-radius: 0px 20px 20px 20px;
  `;
  const MessageText = styled.div`
    margin-right: 100px;
    font-weight: 400;
    font-size: 14px;
    color: #333;
    @media (max-width: 576px) {
      margin-right: 10px;
    }
  `;
  const MessageTime = styled.div`
    font-size: 14px;
    color: #a0a0a0;
  `;
  const MessageBody = styled.div`
    padding-top: 10px;
  `;
  return (
    <Flex>
      <Icon src={props.iconAvtor} />
      <MessageBody>
        <Avtor>{props.avtor}</Avtor>
        <Message>
          <MessageText>{props.message}</MessageText>
          <MessageTime>{props.time}</MessageTime>
        </Message>
      </MessageBody>
    </Flex>
  );
}
