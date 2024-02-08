import HorizontalLine from "./components/HorizontalLine";

import ImageCarousel from "./experiments/ImageCarousel";
import BubblePlot from "./experiments/BubblePlot";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <a href="https://rexgreenway.github.io">{"<"} rexgreenway.github.io</a>
      <h1>React Experiments</h1>
      <HorizontalLine />
      <ImageCarousel />
      <HorizontalLine />
      <BubblePlot />
    </div>
  );
}

export default App;
