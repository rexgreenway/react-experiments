import Subtitle from "../components/text/Subtitle";
import Carousel from "../components/Carousel";

// Import SVGs
import DOCKER from "../assets/icons/docker-original.svg";
import GO from "../assets/icons/go-original-wordmark.svg";
import GCP from "../assets/icons/googlecloud-original.svg";
import JS from "../assets/icons/javascript-original.svg";
import K8S from "../assets/icons/kubernetes-plain.svg";
import PYTHON from "../assets/icons/python-original.svg";

const ImageCarousel = () => {
  return (
    <>
      <Subtitle>Image Carousel</Subtitle>
      <Carousel>
        <img src={DOCKER} />
        <img src={GO} />
        <img src={GCP} />
        <img src={JS} />
        <img src={K8S} />
        <img src={PYTHON} />
        <p>dkhfdksh</p>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
