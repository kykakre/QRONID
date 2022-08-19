import React ,{useState} from 'react';
import {Modal} from "antd"
import style from "./Modal.module.scss"
export default function ModalContainer (props)  {


    return (
        <Modal className={style.modal} visible={props.isVisibleModal} keyboard={() => props.setIsVisibleModal(false)} onCancel={() => props.setIsVisibleModal(false)} footer={null} closable={props.closable} maskClosable={true} >
            {props.children}
        </Modal>
    );
};

