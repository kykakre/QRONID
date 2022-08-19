import React from "react";
import style from "./Message.module.scss";
import add from "../../Img/icon/addFile.svg";
import send from "../../Img/icon/importMessage.svg";

export default function MessageNew(props) {

  return (
    <div className={style.newContainer}>
      <div className={style.newFlexEnd}>
        <img className={style.newAddItem} src={add} />
        <div className={style.newMessage} placeholder="Напишите сообщение..." />
      </div>
      <img className={style.newSend} src={send} />
    </div>
  );
}
