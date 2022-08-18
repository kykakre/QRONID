import React from "react";
import style from "./Chat.module.scss";
import Message from "./Message";

export default function ChatBody(props) {
  let item = props.props.map((e) => (
    <Message
      timeMessage={e.timeMessage}
      bodyMessage={e.bodyMessage}
      key={e.timeMessage}
    />
  ));

  return (
    <div className={style.chatBody}>
      <div className={style.chatFlex}>{item}</div>
    </div>
  );
}
