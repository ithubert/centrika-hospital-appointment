import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
import * as Constants from '../config';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";

export default function Patients() {

  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    getPatients();

  }, []);

  const getPatients = () => {


    setIsLoading(true);


    var data = [];
    var json = "";

    const url = Constants.APIURL;


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch(url + "/admin/patients", requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        //console.log(json["data"]);
        setIsLoading(false);

        data = json["data"];
        setPatients(data);

        //console.table(data);

      });


  }


  const columns = [
    {
      title: "First Name",
      dataIndex: "patient_fname",
      sorter: (a, b) => a.fname.length - b.fname.length,
    },
    {
      title: "Last Name",
      dataIndex: "patient_lname",
      sorter: (a, b) => a.lname.length - b.lname.length,
    },
    {
      title: "Email",
      dataIndex: "patient_email",
      sorter: (a, b) => a.patient_email.length - b.patient_email.length,
    },
    {
      title: "Phone",
      dataIndex: "patient_phone",
      sorter: (a, b) => a.patient_phone.length - b.patient_phone.length,
    },
  
  ];

  return (
    <>
      <SidebarNav />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Patients</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Reports</Link>
                  </li>
                  <li className="breadcrumb-item active">Patients</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      className="table-striped"
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      // bordered
                      dataSource={patients}
                      rowKey={(record) => record.id}
                      showSizeChanger={true}
                      pagination={{
                        total: patients.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

