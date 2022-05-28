import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import IMG01 from "../../../assets/images/doctors/doctor-thumb-01.jpg";
import IMG02 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import IMG03 from "../../../assets/images/doctors/doctor-thumb-03.jpg";
import {Link} from "react-router-dom";

class TablePatientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: IMG01,
          Name: "Dr. Ruby",
          Phone: "8286329170",
          LastVisit: "20 Oct 2019",
          Paid: "$100.00",
        },
        {
          id: 2,
          image: IMG02,
          Name: "Dr. Darren",
          Phone: "2077299974",
          LastVisit: "22 Oct 2019",
          Paid: "$200.00",
        },
        {
          id: 3,
          image: IMG03,
          Name: "Dr. Deborah ",
          Phone: "2607247769",
          LastVisit: "21 Oct 2019",
          Paid: "$250.00",
        },
      ],
    };
  }
  render() {
    const { data } = this.state;

    const columns = [
      {
        title: "Doctor Name",
        dataIndex: "Name",
        render: (text, record) => (
          <h2 className="table-avatar">
            <Link to="/admin/profile" className="avatar avatar-sm mr-2">
              <img  src={record.image} />
            </Link>
            <Link to="/admin/profile">{text}</Link>
          </h2>
        ),
      },
      {
        title: "Phone",
        dataIndex: "Phone",
      },
      {
        title: "LastVisit",
        dataIndex: "LastVisit",
      },
      {
        title: "Paid",
        dataIndex: "Paid",
      },
    ];
    return (
      <div>
        <Table
          className="table-striped"
          style={{ overflowX: "auto" }}
          columns={columns}
          // bordered
          dataSource={data}
          rowKey={(record) => record.id}
          pagination={false}
        />
      </div>
    );
  }
}

export default TablePatientsList;
