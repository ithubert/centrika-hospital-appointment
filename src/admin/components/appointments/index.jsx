import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import SidebarNav from "../sidebar";
import * as Constants from '../config';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";

export default function Appointments() {

  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    getAppointments();

  }, []);

  const getAppointments = () => {

    setIsLoading(true);
    var data = [];

    const url = Constants.APIURL;


    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch(url + "/admin/appointments", requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        setIsLoading(false);

        data = json["data"];
        setAppointments(data);


      });
  }



  const approveRequest = (id) => {

    setIsLoading(true);

    const url = Constants.APIURL;

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch(url + "/admin/aprove?appointment_id=" + id, requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        console.log(json["message"]);
        setIsLoading(false);

        alert(json["message"]);

      });

  }

  const rejectRequest = (id) => {

    setIsLoading(true);
    const url = Constants.APIURL;
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(url + "/admin/reject?appointment_id=" + id, requestOptions)
      .then(function (response) {
        return response.json();

      })
      .then(function (json) {
        console.log(json["message"]);
        setIsLoading(false);
        alert(json["message"]);

      });

  }



  const columns = [
    {
      title: "P. F. Name",
      dataIndex: "patient_fname",
      sorter: (a, b) => a.fname.length - b.fname.length,
    },
    {
      title: "P. L. Name",
      dataIndex: "patient_lname",
      sorter: (a, b) => a.lname.length - b.lname.length,
    },
    {
      title: "D. F. Name",
      dataIndex: "doctor_fname",
      sorter: (a, b) => a.dfname.length - b.dfname.length,
    },
    {
      title: "D. L. Name",
      dataIndex: "doctor_lname",
      sorter: (a, b) => a.dlname.length - b.dlname.length,
    },
    {
      title: "P. Email",
      dataIndex: "patient_email",
      sorter: (a, b) => a.patient_email.length - b.patient_email.length,
    },
    {
      title: "P. Phone",
      dataIndex: "patient_phone",
      sorter: (a, b) => a.patient_phone.length - b.patient_phone.length,
    },
    {
      title: "Date",
      dataIndex: "appointment_date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Time",
      dataIndex: "appointment_time",
      sorter: (a, b) => a.time.length - b.time.length,
    },
    {
      title: "Action",
      dataIndex: "appointment_id",
      render: (text) => (
        <div className="actions">
          <button
            value="Approve"
            className="btn btn-sm bg-success-light"
            onClick={() => {
              var conf = confirm("Are you sure to approve ??");
              if (conf) {
                approveRequest(text);
              }
            }}
          >
            <i className="fe fe-check"></i>Approve </button>
        </div>
      ),
    },
    {
      title: "Action",
      render: (text) => (

        <div className="actions">
          <a
            href="#"
            className="btn btn-sm bg-danger-light"
            onClick={() => {
              var conf = confirm("Are you sure you want to reject this appointment ?");
              if (conf) {
                rejectRequest(text);
              }
            }}
          >
            <i className="fe fe-trash"></i> Reject </a>
        </div>
      ),
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
                <h3 className="page-title">List of Appointment Requests</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#0">Reports</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointment Requests</li>
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
                      dataSource={appointments}
                      rowKey={(record) => record.id}
                      showSizeChanger={true}
                      pagination={{
                        total: appointments.length,
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

