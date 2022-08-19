import React ,{useState} from 'react';
import {Modal} from "antd"

const Modal = (props) => {

    const[modal,setModal]=useState(false);

    const openModal = () => {
        setModal(true)
    }
    return (
        <Modal visible={modal}>
            {props.children}
        </Modal>
    );
};

export default Modal;