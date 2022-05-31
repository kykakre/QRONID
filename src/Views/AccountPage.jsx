import React from "react";
import AccountConteiner from "../Components/Account/AccountContainer";
import AccourdCard from "../Components/AccountCard/AccourdCard";
import CardPay from "../Components/CardPay/CardPay";
import CardMail from "../Components/CardMail.jsx/CardMail";
import CardEntry from "../Components/CardEntry/CardEntry";
import { Navigate } from "react-router";
import AccountAccordeon from "../Components/Account/AccountAccordeon";

export default function AccountPage(props) {
  return (
    <div className="content">
      <AccountAccordeon person={props.person} />
      <AccourdCard card={props.card} person={props.person} />
      <CardPay />
      <CardMail person={props.person} />
      <CardMail person={props.person} />
      <CardEntry />
    </div>
  );
}
