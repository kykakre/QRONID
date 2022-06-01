import React from "react";
import styled from "styled-components";
import add from "../../Img/icon/addFile.svg";

export default function MessageNew(props) {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;
  const AddItem = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
  `;
  const Message = styled.input`
    border: none;
    font-size: 14px;
    &::placeholder {
      color: #cbcbcb;
    }
  `;
  return (
    <Container>
      <div>
        <AddItem src={add} />
        <Message placeholder="Напишите сообщение..." />
      </div>
    </Container>
  );
}
