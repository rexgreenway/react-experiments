import { useState } from "react";

import CodeContainer from "../components/CodeContainer";
import { ImageModal } from "../components/Modal";

import styles from "./Experiment.module.css";

const ImageModalExperiment = () => {
  const jsx = `
  const Modal = ({ close, children }: {close: () => void, children: ReactElement}) => {
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
        <div className={styles.Model}>{children}</div>
      </div>
    );
  };

  const ImageModal = ({ src, close }: {src: string, close: () => void}) => {
    return (
      <Modal close={close}>
        <img className={styles.ImageModal} src={src} />
      </Modal>
    );
  };
  `;

  const css = `
  .ModalBackground {
    align-items: center;
    background-color: rgb(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
  }

  .Modal {
    max-height: 80%;
    max-width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ImageModal {
    border: 10px solid white;
    border-radius: 5px;
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
  }

  .CloseButton {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  `;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className={styles.ExperimentContainer}>
      <h2>Image Modal</h2>
      <p>Simple & centred image modal .</p>

      <button
        style={{ margin: "0 auto", width: "30%" }}
        onClick={() => setOpenModal(true)}
      >
        Moon Modal
      </button>

      {openModal && (
        <ImageModal
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FFullMoon2010.jpg%2F1200px-FullMoon2010.jpg&f=1&nofb=1&ipt=3befceb9787cd3093b82b2399838c443e04fc28005590d3741adf0a0bca1e484&ipo=images"
          close={() => setOpenModal(false)}
        />
      )}

      <h4>React</h4>
      <CodeContainer code={jsx} language="typescript" />

      <h4>CSS</h4>
      <CodeContainer code={css} language="css" />
    </div>
  );
};

export default ImageModalExperiment;
