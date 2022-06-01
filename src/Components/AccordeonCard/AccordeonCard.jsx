import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import styled from "styled-components";
import arrow from "../../Img/icon/arrow.svg";

export default function AccordeonCard(props) {
  const [open, setOpen] = useState(true);
  const openedAccordeon = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? "accordeonCard accordeonOpen" : "accordeonCard"}>
      <div className="cursor" onClick={openedAccordeon}>
        {props.title}
        <img
          className={open ? "dropdownCard dropdownCardOpen" : "dropdownCard"}
          src={arrow}
          alt=""
        />
      </div>

      <CSSTransition
        in={open}
        timeout={300}
        classNames="accordion-wrapper__content"
        unmountOnExit
      >
        <section>{props.body}</section>
      </CSSTransition>
    </div>
  );
}
