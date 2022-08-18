import React from "react";
import style from "./CheckNull.module.scss";
import Btn from "../Btn";

export default function QronNull() {

  return (
    <div className={style.block}>
      <div className={style.title}>Получайте кешбэк за покупки</div>
      <div className={style.text}>
        Все чеки будут сохраняться в истории платежей, а мы начислим кешбэк
      </div>
      <Btn text="Хочу кешбэк" />
    </div>
  );
}
