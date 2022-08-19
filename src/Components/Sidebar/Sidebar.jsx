import React from "react";
import style from "./Sidebar.module.scss";
import { useWindowSize } from "react-use";
import logo from "../../Img/logo.svg";
import account from "../../Img/icon/account.svg";
import card from "../../Img/icon/card.svg";
import message from "../../Img/icon/message.svg";
import { NavLink } from "react-router-dom";
import AccountContainer from "../Account/AccountContainer";

export default function Sidebar(props) {
  const { width } = useWindowSize();

  if (width <= 992) {
    return (
      <div className={style.sidebar}>
        <div className={style.flex}>
          <img className={style.logo} src={logo} alt="logo" />
          <AccountContainer />
        </div>
        <div className={style.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to=""
          >
            <img className={style.itemIcon} src={account} />
            <div className={style.itemText}>Аккаунт</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to="/pay"
          >
            <img className={style.itemIcon} src={card} />
            <div className={style.itemText}>Платежи</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to="/support"
          >
            <div className={style.itemIcon} src={message} />
            <div className={style.itemText}>Центр поддержки</div>
          </NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <Sidebar>
        <img className={style.logo} src={logo} alt="logo" />
        <div className={style.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to=""
          >
            <div className={style.itemIcon} src={account} />
            <div className={style.itemText}>Аккаунт</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to="/pay"
          >
            <div className={style.itemIcon} src={card} />
            <div className={style.itemText}>Платежи</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `NavItem NavItemActive` : `NavItem `
            }
            to="/support"
          >
            <div className={style.itemIcon} src={message} />
            <div className={style.itemText}>Центр поддержки</div>
          </NavLink>
        </div>
      </Sidebar>
    );
  }
}
