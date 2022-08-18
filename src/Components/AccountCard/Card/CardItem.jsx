import React from "react";
import style from "../AccountCard.module.scss";
import { NavLink } from "react-router-dom";

export default function CardItem(props) {

  return (
    <NavLink to={props.href} className="Link">
      <div className={style.cardItemFlexStart}>
        <img className={style.cardItemIcon} src={props.icon} />
        <div className={style.cardItemColumn}>
          <div className={style.cardItemText}>{props.text}</div>
          <div className={style.cardItemLink}>{props.link}</div>
        </div>
      </div>
    </NavLink>
  );
}
