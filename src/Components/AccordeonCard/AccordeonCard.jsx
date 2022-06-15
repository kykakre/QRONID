import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function AccordeonCard(props) {
  const [open, setOpen] = useState(true);
  const openedAccordeon = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? "accordeonCard accordeonOpen" : "accordeonCard"}>
      <div className="cursor" onClick={openedAccordeon}>
        {props.title}
        <div
          className={open ? "dropdownCard dropdownCardOpen" : "dropdownCard"}
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
