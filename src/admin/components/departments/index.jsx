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

export default function Departments() {

  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    getDepartments();

  }, []);

  const getDepartments = () => {


    setIsLoading(true);


    var data = [];
    var json = "";

    const url = Constants.APIURL;


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch(url + "admin/departments", requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        //console.log(json["data"]);
        setIsLoading(false);

        data = json["data"];
        setDepartments(data);

        //console.table(data);

      });


  }


  const columns = [
    {
      title: "Department Name",
      dataIndex: "department_name",
      sorter: (a, b) => a.dname.length - b.dname.length,
    },
    {
      title: "Doctors",
      dataIndex: "doctors",
      sorter: (a, b) => a.doctors.length - b.doctors.length,
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
                <Link to="/admin/adddepartment"><a href="" className="btn btn-info float-right">Add Department</a></Link>
                <h3 className="page-title">List of Departments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Reports</Link>
                  </li>
                  <li className="breadcrumb-item active">departments</li>
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
                      dataSource={departments}
                      rowKey={(record) => record.id}
                      showSizeChanger={true}
                      pagination={{
                        total: departments.length,
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

