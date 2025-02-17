import { useState } from "react";
import { Table, Radio } from "@arco-design/web-react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = [
  {
    id: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    id: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    id: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    id: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    id: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];

function App() {
  const [type, setType] = useState("checkbox");
  const [selectedRowKeys, setSelectedRowKeys] = useState(["4"]);

  return (
    <div>
      <Radio.Group
        style={{
          marginBottom: 20,
        }}
        type="button"
        options={["checkbox", "radio"]}
        value={type}
        onChange={(v) => setType(v)}
      />
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        rowSelection={{
          type,

          selectedRowKeys,
          onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          checkboxProps: (record) => {
            return {
              disabled: record.id === "4",
            };
          },
        }}
      />
    </div>
  );
}

export default App;
