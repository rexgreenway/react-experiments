import ImageCarousel from "./experiments/ImageCarousel";

import styles from "./App.module.css";
import Title from "./components/text/Title";
function App() {
  return (
    <div className={styles.App}>
      <Title>React Experiments</Title>
      <ImageCarousel />
    </div>
  );
}

export default App;
