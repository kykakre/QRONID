import React from "react";
import styled from "styled-components";
import add from "../../Img/icon/addFile.svg";
import send from "../../Img/icon/importMessage.svg";

export default function MessageNew(props) {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    border-top: 1px solid #cbcbcb;
  `;
  const AddItem = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
    margin-right: 15px;
  `;
  const Message = styled.input`
    border: none;
    font-size: 14px;
    font-family: "Commissioner";
    &::placeholder {
      color: #cbcbcb;
    }
  `;
  const FlexEnd = styled.div`
    display: flex;
    align-items: center;
  `;
  const Send = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
  `;
  return (
    <Container>
      <FlexEnd>
        <AddItem src={add} />
        <Message placeholder="Напишите сообщение..." />
      </FlexEnd>
      <Send src={send} />
    </Container>
  );
}
