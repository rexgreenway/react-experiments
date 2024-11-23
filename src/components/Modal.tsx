import { ReactNode, useEffect } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import styles from "./Modal.module.css";

interface ModalProps {
  close: () => void;
  children?: ReactNode;
}

const Modal = ({ close, children }: ModalProps) => {
  // Close on Escape Key Press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [close]);

  return (
    <div onClick={close} className={styles.ModalBackground}>
      <CloseRoundedIcon
        fontSize="large"
        className={styles.CloseButton}
        onClick={close}
      />
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

interface ImageModalProps extends Omit<ModalProps, "children"> {
  src: string;
}

const ImageModal = ({ src, close }: ImageModalProps) => {
  return (
    <Modal close={close}>
      <img className={styles.ImageModal} src={src} />
    </Modal>
  );
};

export { Modal, ImageModal };
