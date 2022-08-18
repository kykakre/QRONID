import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Account.module.scss";

export default function AccountBody(props) {
  return (
    <div className={style.accountBodyTab}>
      <div className={style.accountBodyFlex}>
        <img className={style.accountBodyAvatar} src={props.person.avatar} />
        <div className={style.accountBodyInfo}>{props.person.mail}</div>
      </div>
      <div className={style.accountBodyLink}>
        <NavLink to="">Выйти</NavLink>
      </div>
      <div className={style.accountBodyLink}>
        <NavLink to="">Настройки</NavLink>
      </div>
      <div className={style.accountBodyLink}>
        <NavLink to="">Помощь</NavLink>
      </div>
    </div>
  );
}
