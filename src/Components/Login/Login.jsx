import React from "react";
import icon from "../../Img/favicon 3.svg";
import style from "./Login.module.scss";
import { NavLink } from "react-router-dom";
import vk from "../../Img/icon/vk.svg";
import google from "../../Img/icon/google.svg";
export default function Login() {

  return (
    <div className={style.loginAutorize}>
      <img className={style.loginLogo} src={icon} />
      <div className={style.loginTitle}>Войти с QRON ID</div>
      <div className={style.loginForm}>
        <div className={style.loginFormTitle}>Введите ваш ID</div>
        <input className={style.loginInput} placeholder="Телефон или почта" />
        <NavLink to="#">
          <div className={style.loginNav}>Не помню</div>
        </NavLink>
        <input className={style.loginBtn} type="submit"/>
        <NavLink to="#">
          <div className={style.loginCreate}>Создать ID</div>
        </NavLink>
        <div className={style.loginAutorizeInTo}>Войти с помощью</div>
      </div>
      <div className={style.loginFlex}>
        <NavLink to="#">
          <img className={style.loginLinkIcon} src={vk} />
        </NavLink>
        <NavLink to="#">
          <img className={style.loginLinkIcon} src={google} />
        </NavLink>
      </div>
      <div className={style.loginFooter}>
        <div className={style.loginFooterTitle}>QRON ID</div>
        <div className={style.loginFooterText}>ключ для любого платежа</div>
      </div>
    </div>
  );
}
