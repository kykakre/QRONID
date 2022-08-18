import React from "react";
import Accordeon from "../Accordeon/Accordeon";
import Title from "../Title";
import style from "./Faq.module.scss";

export default function Faq(props) {
  let elementItem = props.faq.map((e) => (
    <Accordeon id={e.id} key={e.id} title={e.title} text={e.text} />
  ));

  return (
    <div className="card-min">
      <Title title="Остались еще вопросы?" />
      <div className={style.content}>{elementItem}</div>
    </div>
  );
}
