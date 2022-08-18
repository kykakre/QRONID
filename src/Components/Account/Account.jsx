import React from "react";
import style from "./Account.module.scss";

export default function Account(props) {


  return (
    <div>
      <div className={style.accountFlex}>
        <img className={style.accountAvatar} src={props.person.avatar} />
        <div className={style.accountText}>{props.person.name}</div>
        <div className={style.accountText}>{props.person.family}</div>
      </div>
    </div>
  );
}
