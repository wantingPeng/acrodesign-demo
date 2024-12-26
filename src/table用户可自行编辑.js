import React, { useState } from "react";
import { Table, Button, Input, Message } from "@arco-design/web-react";

const EditableTable = () => {
  const [data, setData] = useState([
    {
      key: "1",
      name: "Jane Doe",
      salary: 23000,
      address: "32 Park Road, London",
      email: "jane.doe@example.com",
    },
    {
      key: "2",
      name: "Alisa Ross",
      salary: 25000,
      address: "35 Park Road, London",
      email: "alisa.ross@example.com",
    },
  ]);
  const [edingkey, setedingKey] = useState("");
  const [editingRow, setEditingRow] = useState({});

  function addRow() {
    const newRow = {
      key: Date.now().toString(),
      name: "",
      salary: 0,
      address: "",
      email: "",
    };
    setData((pre) => [...pre, newRow]);
    startEdit(newRow);
  }
  function startEdit(rowdata) {
    console.log(rowdata); //点击edit 那一行的数据
    setedingKey(rowdata.key);
    setEditingRow(rowdata);
  }

  function handleEditChange(field, value) {
    setEditingRow({ ...editingRow, [field]: value });
  }

  function saveRow(key) {
    setData((predata) =>
      predata.map((Rowdata) => (Rowdata.key === key ? editingRow : Rowdata))
    ),
      setedingKey(""),
      Message.success("Row saved successfully!");
  }
  const cancelEdit = () => {
    setedingKey("");
  };

  const deleteRow = (key) => {
    setData((pre) => pre.filter((rowdata) => rowdata.key !== key));
  };

  // 定义表格列
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (value, rowdata) => {
        return edingkey === rowdata.key ? (
          <Input
            defaultValue={value}
            onChange={(value) => handleEditChange("name", value)}
          />
        ) : (
          value
        );
      },
    },
    {
      title: "Salary",
      dataIndex: "salary",
      render: (value, rowdata) =>
        edingkey === rowdata.key ? (
          <Input
            type="number"
            defaultValue={value}
            onChange={(v) => handleEditChange("salary", v)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (value, record) =>
        edingkey === record.key ? (
          <Input
            defaultValue={value}
            onChange={(v) => handleEditChange("address", v)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (value, record) =>
        edingkey === record.key ? (
          <Input
            defaultValue={value}
            onChange={(v) => handleEditChange("email", v)}
          />
        ) : (
          value
        ),
    },
    {
      title: "Operation",
      render: (_, record) =>
        edingkey === record.key ? (
          <>
            <Button onClick={() => saveRow(record.key)}>Save</Button>

            <Button onClick={cancelEdit}>Cancel</Button>
          </>
        ) : (
          <>
            <Button
              type="text"
              onClick={() => startEdit(record)}
              style={{ marginRight: 8 }}
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteRow(record.key)}
              type="text"
              status="danger"
            >
              Delete
            </Button>
          </>
        ),
    },
  ];

  return (
    <div>
      <button onClick={addRow}>add</button>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default EditableTable;
