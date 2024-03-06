"use client";
import { FC, useEffect, useRef } from "react";
import { TypePropsModal } from "./Modal.type";
import styles from "./Modal.module.scss";
const Modal: FC<TypePropsModal> = ({ showModal, setShowModal, content }) => {
  useEffect(() => {
    const handleClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (path.includes(modalRef.current)) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, []);
  const modalRef = useRef(null);
  return (
    <>
      {showModal ? (
        <>
          <div className={styles.wrapper}>
            <div ref={modalRef}>{content}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
