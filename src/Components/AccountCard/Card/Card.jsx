import React from "react";
import style from "../AccountCard.module.scss";
import CardItem from "./CardItem";

export default function Card(props) {


  let Item = props.card.map((e) => (
    <CardItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
      link={e.link}
      href={e.href}
    />
  ));
  return <div className={style.cardColumn}>{Item}</div>;
}
