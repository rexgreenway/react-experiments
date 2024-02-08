import { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./CodeContainer.module.css";

const CodeContainer = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [show, setShow] = useState(true);
  const [style, setStyle] = useState(`${styles.Code} ${styles.CodeClosed}`);

  const toggleShow = () => {
    if (show) {
      setStyle(`${styles.CodeOpen}`);
    } else {
      setStyle(`${styles.CodeClosed}`);
    }
    setShow(!show);
  };

  return (
    <>
      <div className={style}>
        <SyntaxHighlighter language={language} style={stackoverflowDark}>
          {code}
        </SyntaxHighlighter>
      </div>
      {show ? (
        <a onClick={toggleShow} className={styles.Button}>
          ↓ Show More ↓
        </a>
      ) : (
        <a onClick={toggleShow} className={styles.Button}>
          ↑ Show Less ↑
        </a>
      )}
    </>
  );
};

export default CodeContainer;
