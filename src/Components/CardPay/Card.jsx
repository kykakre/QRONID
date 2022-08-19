import React from "react";
import style from "./Card.module.scss";
import more from "../../Img/icon/more.svg";

export default function Card(props) {

  return (
    <div className={style.card}>
      <div className={style.cardItemSecond}>
        <img className={style.cardMore} src={more} />
      </div>
      <div className={style.cardItem}>
        <div className={style.cardText}>{props.number}</div>
        <img className={style.cardIcon} src={props.bank} />
      </div>
    </div>
  );
}
