import React from "react";
import style from "./Service.module.scss";
import Title from "../Title";

export default function Service() {

  return (
    <div className="card-min">
      <Title title="Оплата услуг" />
      <div className={style.flex}>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
      </div>
    </div>
  );
}
