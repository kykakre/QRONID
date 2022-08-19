import React from 'react';
import style from './PhoneSetting.module.scss'
import PhoneSettingItem from "./PhoneSettingItem";
const PhoneSetting = (props) => {
    let item = props.phoneSetting.map((e)=>(
            <PhoneSettingItem personPhone={props.personPhone} id={e.id} title={e.title} icon={e.icon} mail={e.mail} key={e.id} text={e.text}/>

        )
    )

    return (
        <div>
            <div className={style.title}>Усильте защиту</div>
            <div className={style.subtitle}>С помощью основного номера вы сможете быстрее входить в Qron</div>
            {item}
        </div>
    );
};

export default PhoneSetting;