import * as React from "react";
import styles from "./styles.module.css";
import { CloseIcon } from "assets";

interface ToastProps {
  show: boolean;
  closeModal: () => void;
  type: boolean;
  title: string;
  text: string;
}

const Toast: React.FC<ToastProps> = ({
  show,
  closeModal,
  type,
  title,
  text,
}) => {
  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        closeModal();
      }, 10000);
    }
  }, [show]);

  if (!show) return null;

  return (
    <aside
      className={`${styles.body} ${type ? styles.success : styles.failure}`}
    >
      <CloseIcon
        onClick={closeModal}
        className={styles.closeBtn}
        role="button"
      />
      <p className={styles.ttl}>{title}</p>
      <p className={styles.txt}>{text}</p>
    </aside>
  );
};

const useOutsideAlerter = (ref: any, closeFunction: () => any) => {
  React.useEffect(() => {
    /**
     * Hide if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunction && closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export { Toast };
