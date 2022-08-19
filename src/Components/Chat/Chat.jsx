import React from "react";
import style from "./Chat.module.scss";
import ChatBody from "./ChatBody";
import ChatTitle from "./ChatTitle";
import MessageNew from "./MessageNew";

export default function Chat(props) {

  return (
    <div className={style.chatContainer}>
      <ChatTitle props={props.props.titleChat} />
      <ChatBody props={props.props.message} />
      <MessageNew />
    </div>
  );
}
