import { Modal, Button, Spin } from "@arco-design/web-react";
import {
  IconCheckCircleFill,
  IconInfoCircleFill,
} from "@arco-design/web-react/icon";

function confirm() {
  return Modal.confirm({
    title: "Submiting...",
    icon: <IconInfoCircleFill />,
    content: (
      <span>
        This modal will be successful after 1.5s. <Spin size={14} />
      </span>
    ),
    footer: null,
  });
}

const sleep = async (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
function App() {
  return (
    <div>
      <Button
        onClick={async () => {
          const confirmObj = confirm();
          await sleep(1500);
          confirmObj.update({
            icon: <IconCheckCircleFill />,
            title: "Success",
            content: "This modal will be closed after 1.5s.",
          });
          await sleep(1500);
          confirmObj.close();
        }}
      >
        Open Modal
      </Button>
    </div>
  );
}

export default App;
