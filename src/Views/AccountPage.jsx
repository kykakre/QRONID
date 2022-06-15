import React from "react";
import AccourdCard from "../Components/AccountCard/AccourdCard";
import CardPay from "../Components/CardPay/CardPay";
import CardMail from "../Components/CardMail.jsx/CardMail";
import CardEntry from "../Components/CardEntry/CardEntry";
import AccountAccordeon from "../Components/Account/AccountAccordeon";
import styled from "styled-components";
export default function AccountPage(props) {
  const Flex = styled.div`
    @media (max-width: 1400px) {
      grid-column-start: 1;
      grid-column-end: -1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
  `;
  return (
    <Flex>
      <div className="content">
        <AccourdCard card={props.card} person={props.person} />
        <CardPay cardPay={props.cardPay} />
        <CardMail person={props.person} />
        <CardMail person={props.person} />
        <CardEntry />
      </div>
    </Flex>
  );
}
