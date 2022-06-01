import React from "react";
import Account from "../Components/Account/Account";
import styled from "styled-components";
import Message from "../Components/Message/Message";
import AccountAccordeon from "../Components/Account/AccountAccordeon";
import Chat from "../Components/Chat/Chat";

export default function SupportPage(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
  `;
  return (
    <Flex>
      <div className="form">
        <Chat props={props.message} />
      </div>
      <AccountAccordeon person={props.person} />
    </Flex>
  );
}
