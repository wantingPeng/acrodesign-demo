import { useState, useEffect } from "react";
import { Table, Space, Button } from "@arco-design/web-react";

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
const allData = new Array(200).fill("").map((_, index) => ({
  key: `${index}`,
  name: `cici ${index}`,
  salary: 2200,
  address: `${index}nurnberg germany`,
  email: `kevin.sandra_${index}@example.com`,
}));
function App() {
  const [data, setData] = useState(allData);
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    sizeCanChange: true,
    showTotal: true, //是否在分页器上显示总记录数。
    total: 100,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true, //当用户更改 pageSize 时，是否重置到第一页
  });

  function handleTableChange(pagination) {
    const { current, pageSize } = pagination;
    setLoading(true);
    setTimeout(() => {
      setData(allData.slice((current - 1) * pageSize, current * pageSize));
      setPagination((pagination) => ({
        ...pagination,
        current: current,
        pageSize: pageSize,
      }));
      setLoading(false);
    }, 1000);
  }

  return (
    <Table
      loading={loading}
      columns={columns}
      data={data}
      pagination={pagination}
      onChange={handleTableChange}
      renderPagination={(paginationNode) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Space>
            <span>Selected {selectedRowKeys.length}</span>
            <Button size="mini">Save</Button>
            <Button size="mini">Delete</Button>
          </Space>

          {paginationNode}
        </div>
      )}
      rowSelection={{
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log("selectedRowKeys", selectedRowKeys);
          console.log("selectedRows", selectedRows);
          setSelectedRowKeys(selectedRowKeys);
        },
      }}
    />
  );
}

export default App;
