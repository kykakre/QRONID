import React from 'react';
import style from "./Modal.module.scss"
const ModalEmail = (props) => {
    return (
        <div className={style.modalEmail}>
            <div className={style.emailTitle}>Запасной адрес электронной почты</div>
            <div className={style.emailSubtitle}>В случае чего он поможет восстановить доступ к аккаунту. Кроме того, на запасной адрес приходят уведомления</div>
            <div className={style.emailText}>Введите адрес:</div>
            <input type="text" className={style.emailInput} />
            <div className={style.flex}>
                <div  className={style.back} onClick={()=> props.setIsVisibleModal(false)}>Отменить</div>
                <div className={style.next}>Добавить</div>
            </div>

        </div>
    );
};

export default ModalEmail;