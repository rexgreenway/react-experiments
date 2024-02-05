import styles from "./Subtitle.module.css";

const Subtitle = ({ children }: { children: string }) => {
  return <h2 className={styles.Subtitle}>{children}</h2>;
};

export default Subtitle;
