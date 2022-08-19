import React from "react";
import AccountCard from "../Components/AccountCard/AccountCard";
import CardPay from "../Components/CardPay/CardPay";
import CardMail from "../Components/CardMail/CardMail";
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
        <AccountCard card={props.card} person={props.person} />
        <CardPay cardPay={props.cardPay} />
        <CardMail person={props.person} />
        <CardMail person={props.person} />
        <CardEntry />
      </div>
    </Flex>
  );
}
