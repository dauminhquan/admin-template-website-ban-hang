import React, { Component, Suspense } from 'react';
import Placeholder from "../../assets/images/placeholders/placeholder.jpg";
import MqNavItem from "../Components/MqNavItem";
import MqNavItemHead from "../Components/MqNavItemHead";
import MqNav from "../Components/MqNav";
class  DefaultMainSideBar extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">


        <div className="sidebar-mobile-toggler text-center">
          <a href="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8"></i>
          </a>
          Navigation
          <a href="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full"></i>
            <i className="icon-screen-normal"></i>
          </a>
        </div>




        <div className="sidebar-content">


          <div className="sidebar-user">
            <div className="card-body">
              <div className="media">
                <div className="mr-3">
                  <a href="#"><img src={Placeholder} width="38"
                                   height="38" className="rounded-circle" alt=""/></a>
                </div>

                <div className="media-body">
                  <div className="media-title font-weight-semibold">Victoria Baker</div>
                  <div className="font-size-xs opacity-50">
                    <i className="icon-pin font-size-sm"></i> &nbsp;Santa Ana, CA
                  </div>
                </div>

                <div className="ml-3 align-self-center">
                  <a href="#" className="text-white"><i className="icon-cog3"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">


              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                <i className="icon-menu" title="Main"></i></li>
              <MqNavItem className="nav-item">
                <MqNavItemHead to="/" className="nav-link">
                  <i className="icon-home4"></i>
                  <span>
									Dashboard
									<span className="d-block font-weight-normal opacity-50">No active orders</span>
								</span>
                </MqNavItemHead>
              </MqNavItem>
              <MqNavItem className="nav-item">
                <MqNavItemHead to="/products" className="nav-link">
                  <i className="icon-menu4"></i>
                  <span>
								  Quản lý sản phẩm
								</span>
                </MqNavItemHead>
              </MqNavItem>
              <MqNavItem className="nav-item">
                <MqNavItemHead to="/orders" className="nav-link">
                  <i className="icon-cart-add2"></i>
                  <span>
								  Quản đơn hàng
								</span>
                  <span className="badge bg-warning-400 align-self-center ml-auto">20</span>
                </MqNavItemHead>
              </MqNavItem>
              <MqNavItem className="nav-item nav-item-submenu">
                <MqNavItemHead className="nav-link">
                  <i className="icon-cog2"></i> <span>Cấu hình sản phẩm</span>
                </MqNavItemHead>
                <MqNav className="nav nav-group-sub">
                  <MqNavItem className="nav-item">
                    <MqNavItemHead to="/categories" clicked={() => {
                      console.log('aaaa')
                    }} className="nav-link">Quản lý danh mục sản phẩm</MqNavItemHead>
                  </MqNavItem>
                  <MqNavItem className="nav-item">
                    <MqNavItemHead to="/suppliers" className="nav-link">Quản lý nhà cung cấp</MqNavItemHead>
                  </MqNavItem>
                  <MqNavItem className="nav-item">
                    <MqNavItemHead to="/attributes" className="nav-link">Quản lý danh sách thuộc tính</MqNavItemHead>
                  </MqNavItem>
                  <MqNavItem className="nav-item">
                    <MqNavItemHead href="../seed/sidebar_none.html" className="nav-link">Quản lý thương hiệu</MqNavItemHead>
                  </MqNavItem>
                </MqNav>
              </MqNavItem>
              <MqNavItem className="nav-item nav-item-submenu">
                <MqNavItemHead className="nav-link">
                  <i className="icon-gift"></i> <span>Giảm giá</span>
                </MqNavItemHead>
                <MqNav className="nav nav-group-sub">
                  <MqNavItem className="nav-item">
                    <MqNavItemHead to="/offers" className="nav-link">Quản lý chiến dịch</MqNavItemHead>
                  </MqNavItem>
                  <MqNavItem className="nav-item">
                    <MqNavItemHead to="/gift-codes" className="nav-link">Quản lý mã giảm giá</MqNavItemHead>
                  </MqNavItem>
                </MqNav>
              </MqNavItem>
              <MqNavItem className="nav-item">
                <MqNavItemHead to="/shipping-methods" className="nav-link">
                  <i className="icon-truck mr-2"></i>
                  <span>
									Vận chuyển
								</span>
                </MqNavItemHead>
              </MqNavItem>
              <MqNavItem className="nav-item">
                <MqNavItemHead to="/buyer-messages" className="nav-link">
                  <i className="icon-bubbles4"></i>
                  <span>
									Tin nhắn khách hàng
								</span>
                  <span className="badge bg-success-400 align-self-center ml-auto">20</span>
                </MqNavItemHead>
              </MqNavItem>
            </ul>
          </div>


        </div>


      </div>
    );
  }
}

export default DefaultMainSideBar
