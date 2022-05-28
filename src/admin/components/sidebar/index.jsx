import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }
    componentDidMount() {
      let $slimScrolls = $('.slimscroll');

      if($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
          height: 'auto',
          width: '100%',
          position: 'right',
          size: '7px',
          color: '#ccc',
          allowPageScroll: false,
          wheelStep: 10,
          touchScrollStep: 100
        });
        let wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function() {
          let rHeight = $(window).height() - 60;
          $slimScrolls.height(rHeight);
          $('.sidebar .slimScrollDiv').height(rHeight);
        });
      }
  
      $('#sidebar-menu a').on('click', function(e) {
        if($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
  
    }
  handleShow(id){
    this.setState({
        show: id
    })
  }

onhandleCloseMenu = (e) => {
  let allElements = Array.from(document.querySelectorAll('.main-wrapper.slide-nav'))
  for (let element of allElements) {
    element.classList.remove('slide-nav')
  }
  let allElements1 = Array.from(document.querySelectorAll('.sidebar-overlay.opened'))
  for (let element of allElements1) {
    element.classList.remove('opened')
  }
  };

  
  render() {
   
   const {  location } = this.props
   let pathname = location.pathname

   return (
    <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
              </li>
              <li className={pathname === '/admin' ?"active" :""}> 
                <Link to="/admin"><i className="fe fe-home" /> <span>Dashboard</span></Link>
              </li>
              <li className={pathname.includes('appointments') ?"active" :""}> 
                <Link to="/admin/appointments"><i className="fe fe-layout" /> <span>Appointments</span></Link>
              </li>
              <li className={pathname.includes('doctors') ?"active" :""}> 
                <Link to="/admin/doctors"><i className="fe fe-user-plus" /> <span>Doctors</span></Link>
              </li>
              <li className={pathname.includes('patients') ?"active" :""}> 
                <Link to="/admin/patients"><i className="fe fe-user" /> <span>Patients</span></Link>
              </li>
              <li className={pathname.includes('departments') ?"active" :""}> 
                <Link to="/admin/departments"><i className="fe fe-document" /> <span>Departments</span></Link>
              </li>
          
            </ul>
          </div>
        </div>
      </div>
  );
}
}

export default withRouter(SidebarNav);
