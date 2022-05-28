import React, { Component, useState, useEffect } from "react";
import { Table, Switch } from "antd";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
import * as Constants from '../config';
import Cookies from 'js-cookie';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import IMG01 from "../../assets/images/doctors/doctor-thumb-01.jpg";

export default function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    getDoctors();

  }, []);

  const getDoctors = () => {


    setIsLoading(true);


    var data = [];
    var json = "";

    const url = Constants.APIURL;


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch(url + "/gitadmin/doctors", requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        //console.log(json["data"]);
        setIsLoading(false);

        data = json["data"];
        setDoctors(data);

        //console.table(data);

      });


  }

  const columns = [
    {
      title: "First Name",
      dataIndex: "doctor_fname",
      render: (text, record) => (

        <h2 className="table-avatar">
          {text}
        </h2>
      ),
      sorter: (a, b) => a.doctor_fname.length - b.doctor_fname.length,
    },
    {
      title: "Last Name",
      dataIndex: "doctor_lname",
      sorter: (a, b) => a.lname.length - b.lname.length,
    },
    {
      title: "Email",
      dataIndex: "doctor_email",
      sorter: (a, b) => a.doctor_email.length - b.doctor_email.length,
    },
    {
      title: "Phone",
      dataIndex: "doctor_phone",
      sorter: (a, b) => a.doctor_phone.length - b.doctor_phone.length,
    },
    {
      title: "Department",
      dataIndex: "department_name",
      sorter: (a, b) => a.department_name.length - b.department_name.length,
    },

    {
      title: "Status",
      dataIndex: "doctor_status",
      key: "doctor_status",
      render: (e) => (
        <Switch onChange={() => { }} defaultChecked={e} />
      ),
      sorter: (a, b) => a.doctor_status.length - b.doctor_status.length,
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
                <Link to="/admin/adddoctor"><a href="" className="btn btn-info float-right">Add Doctor</a></Link>
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Reports</Link>
                  </li>
                  <li className="breadcrumb-item active">Doctors</li>
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
                      dataSource={doctors}
                      rowKey={(record) => record.id}
                      showSizeChanger={true}
                      pagination={{
                        total: 10,
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

