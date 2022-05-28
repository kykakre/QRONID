import React from "react";
import AccountConteiner from "../Components/Account/AccountContainer";
import AccourdCard from "../Components/AccountCard/AccourdCard";
import CardPay from "../Components/CardPay/CardPay";

export default function AccountPage(props) {
  return (
    <div>
      <AccountConteiner person={props.person} />
      <AccourdCard card={props.card} person={props.person} />
      <CardPay />
    </div>
  );
}
