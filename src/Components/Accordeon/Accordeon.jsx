import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Accordeon(props) {
  const [open, setOpen] = useState(false);
  const openedAccordeon = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? "accordeon accordeonOpen" : "accordeon"}>
      <div onClick={openedAccordeon} className="blockAccordeon">
        <div className="titleBlock">{props.title}</div>
        <div alt="" className={open ? "dropdown dropdownOpen" : "dropdown"} />
      </div>

      <CSSTransition
        in={open}
        timeout={300}
        classNames="accordion-wrapper__content"
        unmountOnExit
      >
        <section className="accordion-wrapper__content-body">
          {props.text}
        </section>
      </CSSTransition>
    </div>
  );
}
