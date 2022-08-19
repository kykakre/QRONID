import React from "react";
import style from "../AccountCard.module.scss";
import { NavLink } from "react-router-dom";
import ModalContainer from "../../Modal/ModalContainer";

export default function CardItem(props) {

  return (
<<<<<<< HEAD
    <NavLink to={props.href} onClick={props.customOnClick} className="Link">
      <FlexStart>
        <Icon src={props.icon} />
        <Column>
          <Text>{props.text}</Text>
          <Link>{props.link}</Link>
        </Column>
      </FlexStart>

=======
    <NavLink to={props.href} className="Link">
      <div className={style.cardItemFlexStart}>
        <img className={style.cardItemIcon} src={props.icon} />
        <div className={style.cardItemColumn}>
          <div className={style.cardItemText}>{props.text}</div>
          <div className={style.cardItemLink}>{props.link}</div>
        </div>
      </div>
>>>>>>> 145a94cf22453ce35612de59dd472b8c920d3e0a
    </NavLink>
  );
}
