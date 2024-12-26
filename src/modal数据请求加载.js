import React from "react";
import { Modal, Button, Table, Spin } from "@arco-design/web-react";

function getDataFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "EduTools",
          version: "12.18.1",
          author: "Dickens",
        },
        {
          id: "2",
          name: "BashSupport",
          version: "12.19.2",
          author: "Aristotle",
        },
        {
          id: "3",
          name: "GitToolBox",
          version: "12.20.3",
          author: "Hemingway",
        },
      ]);
    }, 1500);
  });
}

function App() {
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false); // table

  const [data, setData] = React.useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Version",
      dataIndex: "version",
      sort: (a, b) => {
        const aversion = a.version.split(".");
        const bversion = b.version.split(".");
        for (let i = 0; i < aversion.length; i++) {
          if (aversion[i] == bversion[i]) continue;
          return aversion[i] - bversion[i];
        }
        return 1; //return 1 表示稳定排序，保持 a 和 b 的顺序。
      },
    },
    {
      title: "Author",
      dataIndex: "author",
      sorter: (a, b) => a.author.length - b.author.length,
    },
  ];

  async function loadData() {
    setLoading(true);
    const result = await getDataFromServer();
    setData(result);
    setLoading(false);
  }

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true);
          loadData();
        }}
        type="primary"
      >
        Open Modal
      </Button>
      <Modal
        title="Manage Plugins"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        afterClose={() => setData([])}
      >
        <Spin tip="loading Data..." loading={loading}>
          <div
            style={{ height: 266, visibility: !loading ? "visible" : "hidden" }}
          >
            <p>
              You can select multiple plugins for the current project so that
              our app will verify that the plugins are installed and enabled.
            </p>
            <p
              style={{
                marginTop: 20,
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              List of plugins
            </p>
            <Table
              columns={columns}
              data={data}
              pagination={false}
              border={{
                headerCell: true,
                wrapper: true,
              }}
              rowKey="id"
              rowSelection={{
                type: "checkbox",
                checkAll: true,
              }}
            ></Table>
          </div>
        </Spin>
      </Modal>
    </div>
  );
}

export default App;
