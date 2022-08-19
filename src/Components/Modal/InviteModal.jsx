import React from 'react';
import style from "./Modal.module.scss";
import tg from "../../Img/icon/tg.svg";
import btn from "../../Img/icon/tgOutput.svg";
import union from "../../Img/icon/Union.svg"
const InviteModal = (props) => {
    return (
        <div className={style.modalTg}>
            <img src={tg} className={style.tgLogo} />
            <div className={style.tgTitle}>Пригласите близкого присоединиться к Qron ID</div>
            <div className={style.tgSubtitle}>Чтобы пригласить несколько человек, отправьте каждому новое приглашение</div>
            <input className={style.tgInput} placeholder="Почта или телефон" />
            <div className={style.tgBtn}>
                <img src={btn} className={style.tgBtnIcon}/>
                <div className={style.tgBtnText}>Отправить</div>
            </div>
            <div className={style.shared}>
                <img src={union} className={style.sharedIcon}/>
                <div className={style.sharedText}>Поделиться ссылкой</div>
            </div>
        </div>
    );
};

export default InviteModal;