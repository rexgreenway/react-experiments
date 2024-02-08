import Title from "./components/text/Title";

import ImageCarousel from "./experiments/ImageCarousel";
import BubblePlot from "./experiments/BubblePlot";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Title>React Experiments</Title>
      <ImageCarousel />
      <BubblePlot />
    </div>
  );
}

export default App;
