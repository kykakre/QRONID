import React from "react";
import AccourdCard from "../Components/AccountCard/AccourdCard";
import CardPay from "../Components/CardPay/CardPay";
import CardMail from "../Components/CardMail.jsx/CardMail";
import CardEntry from "../Components/CardEntry/CardEntry";
import AccountAccordeon from "../Components/Account/AccountAccordeon";
import styled from "styled-components";
export default function AccountPage(props) {
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
  `;
  return (
    <Flex>
      <div className="content">
        <AccourdCard card={props.card} person={props.person} />
        <CardPay />
        <CardMail person={props.person} />
        <CardMail person={props.person} />
        <CardEntry />
      </div>
      <AccountAccordeon person={props.person} />
    </Flex>
  );
}
