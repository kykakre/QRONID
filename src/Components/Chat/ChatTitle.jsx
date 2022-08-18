import React from "react";
import style from "./Chat.module.scss";
import setting from "../../Img/icon/settings.svg";

export default function ChatTitle(props) {


  return (
    <div className={style.titleSpaceBetween}>
      <div className={style.titleFlex}>
        <div className={style.titleIcon} >
            <div className={style.titleOnline} style={{backgroundColor:`${props.props.status ? "#3bc46d" : "transparent"}`}}/>
          <img className={style.titleImg} src={props.props.avatar} />
        </div>

        <div>
          <div className={style.title}>{props.props.name}</div>
          <div className={style.titleText}>{props.props.status ? " В сети" : "Не в сети"}</div>
        </div>
      </div>
      <img className={style.titleSetting} src={setting} />
    </div>
  );
}
