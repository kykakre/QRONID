import React from "react";
import style from "./QronHistory.module.scss";

export default function QronHistoryItem(props) {


  return (
    <div className={style.itemFlex}>
      <div className={style.item}>
        <img className={style.itemLogo} src={props.icon} />
        <div>
          <div className={style.itemType}>{props.type}</div>
          <div className={style.itemFirm}>{props.name}</div>
        </div>
      </div>
      <div className={style.itemCost}>{props.pay} ₽ </div>
    </div>
  );
}
