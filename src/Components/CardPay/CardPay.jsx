import React from "react";
import TitleCard from "../TitleCard";
import bankCard from "../../Img/icon/bankCard.svg";
import logo from "../../Img/logo.svg";
import CardPayBody from "./CardPayBody";
import AccordeonCard from "../AccordeonCard/AccordeonCard";
export default function CardPay(props) {
  return (
    <div className="card">
      <AccordeonCard
        title={<TitleCard icon={bankCard} title="Карты в " logo={logo} />}
        body={<CardPayBody />}
      />
    </div>
  );
}
