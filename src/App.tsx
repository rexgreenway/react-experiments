import ImageCarousel from "./experiments/ImageCarousel";

import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Rex Demo</h1>
      <br />
      <ImageCarousel />
    </div>
  );
}

export default App;
