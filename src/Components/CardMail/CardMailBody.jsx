import React from "react";
import style from "./CardMail.module.scss";
import TitleText from "../TitleText";

export default function CardMailBody(props) {


  return (
    <div>
      <div className={style.cardMailFlex}>
        <div className={style.cardMailItem}>
          <div className={style.cardMailText}>Адреса на Qron</div>
          <div className={style.cardMailMail}>{props.props.mail}</div>
        </div>
        <TitleText
          title="Добавить адрес для восстановления"
          text="Для надежной защиты"
        ></TitleText>
        <TitleText
          title="Добавить номер мобильного телефона"
          text="Для восстановления доступа к аккаунту и настройки дополнительной защиты"
        ></TitleText>
      </div>
    </div>
  );
}
