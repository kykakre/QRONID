import React from "react";
import style from "./Card.module.scss";
import del from "../../Img/icon/del.svg";

export default function CardDetal(props) {

  return (
    <div className={style.detailCard}>
      <div className={style.detailFlex}>
        <img className={style.detailLogo} src={props.logo} />
        <img className={style.detailDel} src={del} />
      </div>
      <div className={style.detailFlex}>
        <div className={style.detailText}>{props.number}</div>
        <img className={style.detailIcon} src={props.bank} />
      </div>
    </div>
  );
}
