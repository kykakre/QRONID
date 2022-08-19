import React from 'react';
import style from "./PhoneCard.module.scss"
import {NavLink} from "react-router-dom";
import security from "../../Img/icon/phoneSecurity.svg"
import more from "../../Img/icon/phoneMore.svg"
import PhoneSetting from "./PhoneSetting/PhoneSetting";
const PhoneCard = (props) => {
    return (
        <>
            <div className={style.title}>
                Телефоны
            </div>
            <div className={style.description}>
                Узнайте, <NavLink to="">как телефон помогает защитить ваши данные</NavLink>
            </div>
            <div className={style.phoneCard}>
                <div className={style.flex}>
                    <img src={security} className={style.security}/>
                    <div>
                        <div className={style.number}>{props.personPhone.number}</div>
                        <div className={style.status}>Основной номер   для смс</div>
                    </div>
                </div>

                <img src={more} className={style.more}/>

            </div>
            <PhoneSetting personPhone={props.personPhone} phoneSetting={props.phoneSetting}/>

        </>
    );
};

export default PhoneCard;