import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AccountContainer from "./AccountContainer";
import styled from "styled-components";
import arrow from "../../Img/icon/arrow.svg";

export default function AccountAccordeon(props) {
  const [open, setOpen] = useState(false);
  const openedAccordeon = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className={open ? "accordeonCard accordeonOpen" : "accordeonCard"}>
        <div className="cursor" onClick={openedAccordeon}>
          <AccountContainer />
          <img
            className={open ? "dropdown dropdownOpen" : "dropdown"}
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
    </div>
  );
}
