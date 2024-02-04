import Carousel from "../components/Carousel";

// Import SVGs
import DOCKER from "../assets/icons/docker-original.svg";
import GO from "../assets/icons/go-original-wordmark.svg";
import GCP from "../assets/icons/googlecloud-original.svg";
import JS from "../assets/icons/javascript-original.svg";
import K8S from "../assets/icons/kubernetes-plain.svg";
import PYTHON from "../assets/icons/python-original.svg";

import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
  return (
    <>
      <h2>Image Carousel</h2>
      <div className={styles.ImageCarousel}>
        <Carousel>
          <img src={DOCKER} className={styles.Image} />
          <img src={GO} className={styles.Image} />
          <img src={GCP} className={styles.Image} />
          <img src={JS} className={styles.Image} />
          <img src={K8S} className={styles.Image} />
          <img src={PYTHON} className={styles.Image} />
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
