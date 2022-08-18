import React from "react";
import style from "./Message.module.scss";

export default function Message(props) {


  return (
    <div className={style.column}>
      <div className={style.title}>
        Здесь Вы можете задать вопрос. Специалист службы поддержки свяжется с
        Вами и подскажет решение.
      </div>
      <div>
        <div className={style.text}>Ваше сообщение:</div>
        <div className={style.textArea} placeholder="Напишите сообщение..." wrap="true"></div>
      </div>
      <input className="submit" type="submit"></input>
    </div>
  );
}
