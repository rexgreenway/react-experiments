import Subtitle from "../components/text/Subtitle";

import Bubble from "../components/Bubble";

const BubblePlot = () => {
  const nodes = [
    { group: "group-1", radius: 1 },
    { group: "group-1", radius: 2 },
    { group: "group-2", radius: 3 },
    { group: "group-2", radius: 1 },
    { group: "group-3", radius: 2 },
    { group: "group-3", radius: 3 },
  ];

  return (
    <>
      <Subtitle>Bubble Plot</Subtitle>
      <Bubble>{nodes}</Bubble>
    </>
  );
};

export default BubblePlot;
