import React from "react";
import TitleText from "../TitleText";
import style from "./CardEntry.module.scss";

export default function CardEntryBody(props) {

  return (
    <div>
      <div className={style.cardEntryFlex}>
        <TitleText
          title="История входов"
          text="Последний вход: 20 февраля, 12:36,AndroidBrowser"
        ></TitleText>
        <TitleText
          title="Устройства, сервисы и программы"
          text="Список всех мест, в которых вы автоматизированы"
        ></TitleText>
        <TitleText
          title="Выйти на всех устройствах"
          text="Если есть сомнения или подозрения"
        ></TitleText>
      </div>
    </div>
  );
}
