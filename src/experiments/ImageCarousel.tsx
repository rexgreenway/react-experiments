import Carousel from "../components/Carousel";
import CodeContainer from "../components/CodeContainer";

import DOCKER from "../assets/icons/docker-original.svg";
import GO from "../assets/icons/go-original-wordmark.svg";
import GCP from "../assets/icons/googlecloud-original.svg";
import JS from "../assets/icons/javascript-original.svg";
import K8S from "../assets/icons/kubernetes-plain.svg";
import PYTHON from "../assets/icons/python-original.svg";

import styles from "./Experiment.module.css";

const ImageCarousel = () => {
  const jsx = `
  const Carousel = ({ children }: { children: ReactElement[] }) => {
    return (
      <div className={styles.Carousel}>
        <div className={styles.Slider}>
          <div className={styles.Content}>{children}</div>
          <div className={styles.Content}>{children}</div>
        </div>
      </div>
    );
  };
  `;

  const css = `
  .Carousel {
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        #ffffff 15%,
        #ffffff 85%,
        rgba(0, 0, 0, 0)
    );
  }
      
  .Slider {
      width: 200%;
      display: flex;
  }
  
  .Content {
      animation: scroll 30s linear infinite;
      align-items: center;
      background-color: inherit;
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
  }
  
  .Content img {
        height: 40px;
  }
      
  @keyframes scroll {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0); /* The image width */
    }
  }
  `;

  return (
    <div className={styles.ExperimentContainer}>
      <h2>Image Carousel</h2>
      <p>
        Responsive & stylable infinite spinning carousel that accepts any number
        of child elements. Implemented in React with CSS modules however no
        third party libraries are used.
      </p>
      <div className={styles.Experiment}>
        <Carousel>
          <img src={DOCKER} />
          <img src={GO} />
          <img src={GCP} />
          <img src={JS} />
          <img src={K8S} />
          <img src={PYTHON} />
        </Carousel>
      </div>
      <h3>React</h3>
      <CodeContainer code={jsx} language="javascript" />
      <h3>CSS</h3>
      <CodeContainer code={css} language="css" />
    </div>
  );
};

export default ImageCarousel;
