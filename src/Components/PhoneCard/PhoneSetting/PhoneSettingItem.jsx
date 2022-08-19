import React from 'react';
import style from "./PhoneSetting.module.scss"
import {Switch} from "antd"
const PhoneSettingItem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.itemContainer}>
                <img src={props.icon} className={style.itemIcon}/>
                <div>
                    <div className={style.itemTitle}>{props.title}</div>
                    <div className={style.itemText}>{props.text} {props.mail? `${props.personPhone.number}${props.mail}`:<></>}</div>
                </div>
            </div>
            <Switch/>
        </div>
    );
};

export default PhoneSettingItem;