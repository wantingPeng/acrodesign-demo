import { useState, useRef } from "react";
import { Steps, Button, Divider } from "@arco-design/web-react";
import { IconLeft, IconRight } from "@arco-design/web-react/icon";
const Step = Steps.Step;

function App() {
  const [current, setCurrent] = useState(1);

  function renderContent(step) {
    return <div></div>;
  }
  return (
    <div>
      <Steps direction="vertical" current={current} style={{ width: 170 }}>
        <Step title="Succeeded" description="This is a description" />
        <Step title="Processing" description="This is a description" />
        <Step title="Pending" description="This is a description" />
      </Steps>
      <Divider type="vertical" style={{ display: "block", height: "auto" }} />
      {renderContent(current)}
      <Button
        disabled={current <= 1}
        onClick={() => {
          setCurrent(current - 1);
        }}
      >
        <IconLeft />
        Back
      </Button>
      <Button
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        Next
        <IconRight />
      </Button>
    </div>
  );
}

export default App;
