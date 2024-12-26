import React, { useState } from "react";
import {
  Input,
  Radio,
  Select,
  Slider,
  Typography,
} from "@arco-design/web-react";
import {
  IconClockCircle,
  IconSearch,
  IconInfoCircle,
} from "@arco-design/web-react/icon";

const RadioGroup = Radio.Group;
const InputSearch = Input.Search;

const App = () => {
  const [size, setSize] = useState("default"); // 管理输入框大小
  const [height, setHeight] = useState(0); // 管理高度

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight); // 更新高度
  };

  const handleChange = (newSize) => {
    setHeight(undefined); // 重置高度
    setSize(newSize); // 更新大小
  };

  const props = {
    size,
    ...(height && { height }), // 如果 height 存在，则添加到 props
  };

  return (
    <div>
      {/* 单选按钮组 */}
      <RadioGroup
        type="button"
        mode="fill"
        name="size"
        value={size}
        onChange={handleChange}
        style={{ marginBottom: 24 }}
      >
        {["mini", "small", "default", "large"].map((x) => (
          <Radio key={x} value={x}>
            {x}
          </Radio>
        ))}
      </RadioGroup>

      <br />
      <Typography.Text>Custom height</Typography.Text>
      {/* 滑块 */}
      <Slider
        value={height}
        onChange={handleHeightChange}
        max={60}
        min={24}
        style={{ width: 180, margin: "0 0 20px 20px" }}
      />

      {/* 输入框示例 */}
      <div>
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          prefix={<IconClockCircle />}
          placeholder="Enter something"
        />
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          suffix={<IconInfoCircle />}
          placeholder="Enter something"
        />
      </div>

      {/* 添加前后缀的输入框 */}
      <div>
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          addAfter="KG"
          placeholder="Enter something"
        />
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          addBefore="+86"
          placeholder="Enter phone number"
        />
      </div>

      {/* 组合输入框 */}
      <div>
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          addBefore="+86"
          addAfter={<IconSearch />}
          prefix={<IconClockCircle />}
          suffix={<IconInfoCircle />}
          allowClear
          placeholder="Enter phone number"
        />
        <InputSearch
          {...props}
          placeholder="Enter something"
          style={{ width: 350, margin: 12 }}
          searchButton
        />
      </div>

      {/* 带选择器的输入框 */}
      <div>
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          addBefore={
            <Select
              size={size}
              placeholder="Select protocol"
              style={{ width: 100 }}
            >
              <Select.Option value="http://">http://</Select.Option>
              <Select.Option value="https://">https://</Select.Option>
            </Select>
          }
          allowClear
          placeholder="Enter something"
        />
        <Input
          {...props}
          style={{ width: 350, margin: 12 }}
          allowClear
          placeholder="Enter something"
        />
      </div>
    </div>
  );
};

export default App;
