import { ReactNode } from "react";

import styles from "./Carousel.module.css";

const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.Carousel}>
      <div className={styles.Slider}>
        <div className={styles.Content}>{children}</div>
        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
};

export default Carousel;
