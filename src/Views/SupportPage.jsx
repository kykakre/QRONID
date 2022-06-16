import React from "react";
import Account from "../Components/Account/Account";
import styled from "styled-components";
import Message from "../Components/Message/Message";
import AccountAccordeon from "../Components/Account/AccountAccordeon";
import Chat from "../Components/Chat/Chat";

export default function SupportPage(props) {
  const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1400px) {
      grid-column-start: 1;
      grid-column-end: -1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  `;
  return (
    <Flex>
      <div className="form">
        <Chat props={props.message} />
      </div>
    </Flex>
  );
}
