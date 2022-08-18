import React from "react";
import QronHistoryItem from "./QronHistoryItem";
import style from "./QronHistory.module.scss";
import Btn from "../Btn";

export default function QronHistory(props) {
  let Item = props.pay.map((e) => (
    <QronHistoryItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      type={e.type}
      name={e.name}
      pay={e.pay}
    />
  ));

  return (
    <div>
      <div className={style.flex}>
          <div className={style.cart}></div>
          <div className={style.cart}></div>
          <div className={style.cart}></div>
          <div className={style.cart}></div>
          <div className={style.cart}></div>
      </div>
      <div className={style.time}>1 марта, вторник </div>
      <div className={style.container}>{Item}</div>
      <div className={style.align}>
        <Btn text="Показать все" />
      </div>
    </div>
  );
}
