import React from "react";
import style from "./Message.module.scss";

export default function MessageItem(props) {

  return (
    <div className={style.itemFlex}>
      <img className={style.itemIcon} src={props.iconAvtor} />
      <div className={style.itemMessageBody}>
        <div className={style.itemAvtor}>{props.avtor}</div>
        <div className={style.itemMessage}>
          <div className={style.itemMessageText}>{props.message}</div>
          <div className={style.itemMessageTime}>{props.time}</div>
        </div>
      </div>
    </div>
  );
}
