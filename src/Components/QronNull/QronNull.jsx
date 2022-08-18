import React from "react";
import style from "./QronNull.module.scss";

export default function QronNull() {
  return (
    <div className={style.block}>
      <div className={style.title}>Платежей пока нет</div>
      <div className={style.text}>
        Радуйте себя покупками, получайте баллы, а мы покажем это в истории
        платежей
      </div>
    </div>
  );
}
