import React from "react";
import style from "./Message.module.scss";
import MessageItem from "./MessageItem";
export default function Message(props) {
  let message = props.bodyMessage.map((e) => (
    <MessageItem
      id={e.id}
      key={e.id}
      avtor={e.avtor}
      iconAvtor={e.iconAvtor}
      message={e.message}
      time={e.time}
    />
  ));


  return (
    <div>
      <div className={style.messageTitle}>{props.timeMessage}</div>
      <div>{message}</div>
    </div>
  );
}
