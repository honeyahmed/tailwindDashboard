import React from "react";
import { Divider, Table } from "antd";
import { TbArrowsDownUp } from "react-icons/tb";
import person from "../../Images/person.jpg";
const columns = [
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Code</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "code",

    // render: (text) => <a>{`${text} <TbArrowsDownUp/>`}</a>,
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Name</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "name",
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Mobile Number</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "mobilenumber",
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Email</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "email",
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Job Title</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "jobtitle",
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Authorized Module</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "authorizedmodule",
  },
  {
    title: (
      <div className="flex justify-center items-center">
        <span className="mr-1">Joining Date</span>
        <span className="text-gray-400">
          <TbArrowsDownUp />
        </span>
      </div>
    ),
    dataIndex: "joiningDate",
  },
];
const data = [];
for (let i = 0; i <18; i++) {
  data.push({
    code: "BD47281202",
    name: (
      <div className="flex items-center  ">
        <div>
          <img class="w-8 h-8 rounded-full mr-2" src={person} alt="Rounded avatar" />
        </div>
       <span> Customer Name</span>
      </div>
    ),
    mobilenumber: "01294030432",
    email: `Islamsultan@gmail.com`,
    jobtitle: `Product Manager`,
    authorizedmodule: `Trustree (CRM)`,
    joiningDate: `Mon, 5 Nov 2020 10PM`,
  });
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const TableComponent = () => {
  return (
    <div>
      <Table
        className="p-5"
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter", "bottomCenter"] ,pageSize:7}}
      />
      <Divider />
    </div>
  );
};
export default TableComponent;
