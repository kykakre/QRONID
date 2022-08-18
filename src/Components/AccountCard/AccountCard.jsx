import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AccountCard.module.scss";
import Card from "./Card/Card";

export default function AccountCard(props) {

  return (
    <div className="card">
      <div className={style.accountCardFlex}>
        <div className={style.accountCardColumn}>
          <img className={style.accountCardAvatar} src={props.person.avatar} />
          <NavLink to="#">
            <div className={style.accountCardLink}>Добавить фото</div>
          </NavLink>
          <div className={style.accountCardName}>{props.person.name}</div>
          <div className={style.accountCardName}>{props.person.family}</div>
          <div className={style.accountCardMail}>{props.person.mail}</div>
        </div>
        <div className={style.accountCardColumnMin}>
          <div className={style.accountCardFlexStart}>
            <div className={style.accountCardText}>
              Для изменения персональной информации обратитесь к администратору
              домена
            </div>
            <div className={style.accountCardTextMin}>Россия</div>
          </div>
          <div className={style.accountCardFlexCenter}>
            <div className={style.accountCardText}>
              Имя в комментариях и отзывах: <div>Иван Иванов</div>
            </div>
            <div className={style.accountCardTextMin}>
              Публичный адрес: <div>Не выбран</div>
            </div>
          </div>
        </div>
        <Card card={props.card} />
      </div>
    </div>
  );
}
