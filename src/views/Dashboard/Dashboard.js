import React, { Component, lazy, Suspense } from 'react';
import DashboardHeader from "./DashboardHeader";

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <main>
        <DashboardHeader/>
        <div className="content">
          <div className="row">
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card bg-teal-400">
                    <div className="card-body">
                      <div className="d-flex">
                        <h3 className="font-weight-semibold mb-0">3,450</h3>
                        <span className="badge bg-teal-800 badge-pill align-self-center ml-auto">+53,6%</span>
                      </div>

                      <div>
                        Members online
                        <div className="font-size-sm opacity-75">489 avg</div>
                      </div>
                    </div>

                    <div className="container-fluid">
                      <div id="members-online"></div>
                    </div>
                  </div>


                </div>

                <div className="col-lg-4">


                  <div className="card bg-pink-400">
                    <div className="card-body">
                      <div className="d-flex">
                        <h3 className="font-weight-semibold mb-0">49.4%</h3>
                        <div className="list-icons ml-auto">
                          <div className="list-icons-item dropdown">
                            <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i
                              className="icon-cog3"></i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#" className="dropdown-item"><i className="icon-sync"></i> Update data</a>
                              <a href="#" className="dropdown-item"><i className="icon-list-unordered"></i> Detailed
                                log</a>
                              <a href="#" className="dropdown-item"><i className="icon-pie5"></i> Statistics</a>
                              <a href="#" className="dropdown-item"><i className="icon-cross3"></i> Clear list</a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        Current server load
                        <div className="font-size-sm opacity-75">34.6% avg</div>
                      </div>
                    </div>

                    <div id="server-load"></div>
                  </div>


                </div>

                <div className="col-lg-4">


                  <div className="card bg-blue-400">
                    <div className="card-body">
                      <div className="d-flex">
                        <h3 className="font-weight-semibold mb-0">$18,390</h3>
                        <div className="list-icons ml-auto">
                          <a className="list-icons-item" data-action="reload"></a>
                        </div>
                      </div>

                      <div>
                        Today's revenue
                        <div className="font-size-sm opacity-75">$37,578 avg</div>
                      </div>
                    </div>

                    <div id="today-revenue"></div>
                  </div>


                </div>
              </div>




              <div className="card">
                <div className="card-header header-elements-sm-inline">
                  <h6 className="card-title">Support tickets</h6>
                  <div className="header-elements">
                    <a className="text-default daterange-ranges font-weight-semibold cursor-pointer dropdown-toggle">
                      <i className="icon-calendar3 mr-2"></i>
                      <span></span>
                    </a>
                  </div>
                </div>

                <div className="card-body d-md-flex align-items-md-center justify-content-md-between flex-md-wrap">
                  <div className="d-flex align-items-center mb-3 mb-md-0">
                    <div id="tickets-status"></div>
                    <div className="ml-3">
                      <h5 className="font-weight-semibold mb-0">14,327 <span
                        className="text-success font-size-sm font-weight-normal"><i className="icon-arrow-up12"></i> (+2.9%)</span>
                      </h5>
                      <span className="badge badge-mark border-success mr-1"></span> <span className="text-muted">Jun 16, 10:00 am</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3 mb-md-0">
                    <a href="#"
                       className="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon">
                      <i className="icon-alarm-add"></i>
                    </a>
                    <div className="ml-3">
                      <h5 className="font-weight-semibold mb-0">1,132</h5>
                      <span className="text-muted">total tickets</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3 mb-md-0">
                    <a href="#"
                       className="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon">
                      <i className="icon-spinner11"></i>
                    </a>
                    <div className="ml-3">
                      <h5 className="font-weight-semibold mb-0">06:25:00</h5>
                      <span className="text-muted">response time</span>
                    </div>
                  </div>

                  <div>
                    <a href="#" className="btn bg-teal-400"><i className="icon-statistics mr-2"></i> Report</a>
                  </div>
                </div>

                <div className="table-responsive">
                  {/*<table className="table text-nowrap">*/}
                  {/*  <thead>*/}
                  {/*  <tr>*/}
                  {/*    <th style="width: 50px">Due</th>*/}
                  {/*    <th style="width: 300px;">User</th>*/}
                  {/*    <th>Description</th>*/}
                  {/*    <th className="text-center" style="width: 20px;"><i className="icon-arrow-down12"></i></th>*/}
                  {/*  </tr>*/}
                  {/*  </thead>*/}
                  {/*  <tbody>*/}
                  {/*  <tr className="table-active table-border-double">*/}
                  {/*    <td colSpan="3">Active tickets</td>*/}
                  {/*    <td className="text-right">*/}
                  {/*      <span className="badge bg-blue badge-pill">24</span>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <h6 className="mb-0">12</h6>*/}
                  {/*      <div className="font-size-sm text-muted line-height-1">hours</div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-teal-400 rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Annabelle*/}
                  {/*            Doney</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-blue mr-1"></span> Active*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div className="font-weight-semibold">[#1183] Workaround for OS X selects printing bug</div>*/}
                  {/*        <span*/}
                  {/*          className="text-muted">Chrome fixed the bug several versions ago, thus rendering this...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i*/}
                  {/*              className="icon-checkmark3 text-success"></i> Resolve issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <h6 className="mb-0">16</h6>*/}
                  {/*      <div className="font-size-sm text-muted line-height-1">hours</div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#">*/}
                  {/*            <img src="../../../../global_assets/images/placeholders/placeholder.jpg"*/}
                  {/*                 className="rounded-circle" width="32" height="32" alt="" />*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold">Chris Macintyre</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-blue mr-1"></span> Active*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div className="font-weight-semibold">[#1249] Vertically center carousel controls</div>*/}
                  {/*        <span*/}
                  {/*          className="text-muted">Try any carousel control and reduce the screen width below...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i*/}
                  {/*              className="icon-checkmark3 text-success"></i> Resolve issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <h6 className="mb-0">20</h6>*/}
                  {/*      <div className="font-size-sm text-muted line-height-1">hours</div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-blue rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Robert Hauber</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-blue mr-1"></span> Active*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div className="font-weight-semibold">[#1254] Inaccurate small pagination height</div>*/}
                  {/*        <span className="text-muted">The height of pagination elements is not consistent with...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i*/}
                  {/*              className="icon-checkmark3 text-success"></i> Resolve issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <h6 className="mb-0">40</h6>*/}
                  {/*      <div className="font-size-sm text-muted line-height-1">hours</div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-warning-400 rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Robert Hauber</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-blue mr-1"></span> Active*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div className="font-weight-semibold">[#1184] Round grid column gutter operations</div>*/}
                  {/*        <span className="text-muted">Left rounds up, right rounds down. should keep everything...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i*/}
                  {/*              className="icon-checkmark3 text-success"></i> Resolve issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr className="table-active table-border-double">*/}
                  {/*    <td colSpan="3">Resolved tickets</td>*/}
                  {/*    <td className="text-right">*/}
                  {/*      <span className="badge bg-success badge-pill">42</span>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <i className="icon-checkmark3 text-success"></i>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-success-400 rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Alan Macedo</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-success mr-1"></span> Resolved*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div>[#1046] Avoid some unnecessary HTML string</div>*/}
                  {/*        <span className="text-muted">Rather than building a string of HTML and then parsing it...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve*/}
                  {/*              issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <i className="icon-checkmark3 text-success"></i>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-pink-400 rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Brett*/}
                  {/*            Castellano</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-success mr-1"></span> Resolved*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div>[#1038] Update json configuration</div>*/}
                  {/*        <span className="text-muted">The <code>files</code> property is necessary to override the files property...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve*/}
                  {/*              issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <i className="icon-checkmark3 text-success"></i>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#">*/}
                  {/*            <img src="../../../../global_assets/images/placeholders/placeholder.jpg"*/}
                  {/*                 className="rounded-circle" width="32" height="32" alt="" />*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold">Roxanne Forbes</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-success mr-1"></span> Resolved*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div>[#1034] Tooltip multiple event</div>*/}
                  {/*        <span className="text-muted">Fix behavior when using tooltips and popovers that are...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve*/}
                  {/*              issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger"></i> Close*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr className="table-active table-border-double">*/}
                  {/*    <td colSpan="3">Closed tickets</td>*/}
                  {/*    <td className="text-right">*/}
                  {/*      <span className="badge bg-danger badge-pill">37</span>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <i className="icon-cross2 text-danger-400"></i>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#">*/}
                  {/*            <img src="../../../../global_assets/images/placeholders/placeholder.jpg"*/}
                  {/*                 className="rounded-circle" width="32" height="32" alt="" />*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold">Mitchell Sitkin</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-danger mr-1"></span> Closed*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div>[#1040] Account for static form controls in form group</div>*/}
                  {/*        <span*/}
                  {/*          className="text-muted">Resizes control label's font-size and account for the standard...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve*/}
                  {/*              issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey"></i> Reopen*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}

                  {/*  <tr>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <i className="icon-cross2 text-danger"></i>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <div className="d-flex align-items-center">*/}
                  {/*        <div className="mr-3">*/}
                  {/*          <a href="#" className="btn bg-brown-400 rounded-round btn-icon btn-sm">*/}
                  {/*            <span className="letter-icon"></span>*/}
                  {/*          </a>*/}
                  {/*        </div>*/}
                  {/*        <div>*/}
                  {/*          <a href="#" className="text-default font-weight-semibold letter-icon-title">Katleen Jensen</a>*/}
                  {/*          <div className="text-muted font-size-sm"><span*/}
                  {/*            className="badge badge-mark border-danger mr-1"></span> Closed*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*    <td>*/}
                  {/*      <a href="#" className="text-default">*/}
                  {/*        <div>[#1038] Proper sizing of form control feedback</div>*/}
                  {/*        <span className="text-muted">Feedback icon sizing inside a larger/smaller form-group...</span>*/}
                  {/*      </a>*/}
                  {/*    </td>*/}
                  {/*    <td className="text-center">*/}
                  {/*      <div className="list-icons">*/}
                  {/*        <div className="list-icons-item dropdown">*/}
                  {/*          <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i*/}
                  {/*            className="icon-menu7"></i></a>*/}
                  {/*          <div className="dropdown-menu dropdown-menu-right">*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-undo"></i> Quick reply</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-history"></i> Full history</a>*/}
                  {/*            <div className="dropdown-divider"></div>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue"></i> Unresolve*/}
                  {/*              issue</a>*/}
                  {/*            <a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey"></i> Reopen*/}
                  {/*              issue</a>*/}
                  {/*          </div>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </td>*/}
                  {/*  </tr>*/}
                  {/*  </tbody>*/}
                  {/*</table>*/}
                </div>
              </div>




              <div className="card">
                <div className="card-header header-elements-inline">
                  <h6 className="card-title">Latest posts</h6>
                  <div className="header-elements">
                    <div className="list-icons">
                      <a className="list-icons-item" data-action="collapse"></a>
                      <a className="list-icons-item" data-action="reload"></a>
                      <a className="list-icons-item" data-action="remove"></a>
                    </div>
                  </div>
                </div>

                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="media flex-column flex-sm-row mt-0 mb-3">
                        <div className="mr-sm-3 mb-2 mb-sm-0">
                          <div className="card-img-actions">
                            <a href="#">
                              <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                                   className="img-fluid img-preview rounded" alt="" />
                              <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span>
                            </a>
                          </div>
                        </div>

                        <div className="media-body">
                          <h6 className="media-title"><a href="#">Up unpacked friendly</a></h6>
                          <ul className="list-inline list-inline-dotted text-muted mb-2">
                            <li className="list-inline-item"><i className="icon-book-play mr-2"></i> Video tutorials</li>
                          </ul>
                          The him father parish looked has sooner. Attachment frequently terminated son hello...
                        </div>
                      </div>

                      <div className="media flex-column flex-sm-row mt-0 mb-3">
                        <div className="mr-sm-3 mb-2 mb-sm-0">
                          <div className="card-img-actions">
                            <a href="#">
                              <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                                   className="img-fluid img-preview rounded" alt="" />
                              <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span>
                            </a>
                          </div>
                        </div>

                        <div className="media-body">
                          <h6 className="media-title"><a href="#">It allowance prevailed</a></h6>
                          <ul className="list-inline list-inline-dotted text-muted mb-2">
                            <li className="list-inline-item"><i className="icon-book-play mr-2"></i> Video tutorials</li>
                          </ul>
                          Alteration literature to or an sympathize mr imprudence. Of is ferrars subject enjoyed...
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="media flex-column flex-sm-row mt-0 mb-3">
                        <div className="mr-sm-3 mb-2 mb-sm-0">
                          <div className="card-img-actions">
                            <a href="#">
                              <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                                   className="img-fluid img-preview rounded" alt="" />
                              <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span>
                            </a>
                          </div>
                        </div>

                        <div className="media-body">
                          <h6 className="media-title"><a href="#">Case read they must</a></h6>
                          <ul className="list-inline list-inline-dotted text-muted mb-2">
                            <li className="list-inline-item"><i className="icon-book-play mr-2"></i> Video tutorials</li>
                          </ul>
                          On it differed repeated wandered required in. Then girl neat why yet knew rose spot...
                        </div>
                      </div>

                      <div className="media flex-column flex-sm-row mt-0 mb-3">
                        <div className="mr-sm-3 mb-2 mb-sm-0">
                          <div className="card-img-actions">
                            <a href="#">
                              <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                                   className="img-fluid img-preview rounded" alt="" />
                              <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x"></i></span>
                            </a>
                          </div>
                        </div>

                        <div className="media-body">
                          <h6 className="media-title"><a href="#">Too carriage attended</a></h6>
                          <ul className="list-inline list-inline-dotted text-muted mb-2">
                            <li className="list-inline-item"><i className="icon-book-play mr-2"></i> FAQ section</li>
                          </ul>
                          Marianne or husbands if at stronger ye. Considered is as middletons uncommonly...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="col-xl-4">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h6 className="card-title">Daily sales stats</h6>
                  <div className="header-elements">
                    <span className="font-weight-bold text-danger-600 ml-2">$4,378</span>
                    <div className="list-icons ml-3">
                      <div className="list-icons-item dropdown">
                        <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i
                          className="icon-cog3"></i></a>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item"><i className="icon-sync"></i> Update data</a>
                          <a href="#" className="dropdown-item"><i className="icon-list-unordered"></i> Detailed log</a>
                          <a href="#" className="dropdown-item"><i className="icon-pie5"></i> Statistics</a>
                          <div className="dropdown-divider"></div>
                          <a href="#" className="dropdown-item"><i className="icon-cross3"></i> Clear list</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="chart" id="sales-heatmap"></div>
                </div>

                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                    <tr>
                      <th className="w-100">Application</th>
                      <th>Time</th>
                      <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#" className="btn bg-primary-400 rounded-round btn-icon btn-sm">
                              <span className="letter-icon"></span>
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">Sigma
                              application</a>
                            <div className="text-muted font-size-sm"><i
                              className="icon-checkmark3 font-size-sm mr-1"></i> New order
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted font-size-sm">06:28 pm</span>
                      </td>
                      <td>
                        <h6 className="font-weight-semibold mb-0">$49.90</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#" className="btn bg-danger-400 rounded-round btn-icon btn-sm">
                              <span className="letter-icon"></span>
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">Alpha
                              application</a>
                            <div className="text-muted font-size-sm"><i
                              className="icon-spinner11 font-size-sm mr-1"></i> Renewal
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted font-size-sm">04:52 pm</span>
                      </td>
                      <td>
                        <h6 className="font-weight-semibold mb-0">$90.50</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#" className="btn bg-indigo-400 rounded-round btn-icon btn-sm">
                              <span className="letter-icon"></span>
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">Delta
                              application</a>
                            <div className="text-muted font-size-sm"><i
                              className="icon-lifebuoy font-size-sm mr-1"></i> Support
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted font-size-sm">01:26 pm</span>
                      </td>
                      <td>
                        <h6 className="font-weight-semibold mb-0">$60.00</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#" className="btn bg-success-400 rounded-round btn-icon btn-sm">
                              <span className="letter-icon"></span>
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">Omega
                              application</a>
                            <div className="text-muted font-size-sm"><i
                              className="icon-lifebuoy font-size-sm mr-1"></i> Support
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted font-size-sm">11:46 am</span>
                      </td>
                      <td>
                        <h6 className="font-weight-semibold mb-0">$55.00</h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <a href="#" className="btn bg-danger-400 rounded-round btn-icon btn-sm">
                              <span className="letter-icon"></span>
                            </a>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">Alpha
                              application</a>
                            <div className="text-muted font-size-sm"><i
                              className="icon-spinner11 font-size-sm mr-2"></i> Renewal
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted font-size-sm">10:29 am</span>
                      </td>
                      <td>
                        <h6 className="font-weight-semibold mb-0">$90.50</h6>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>




              <div className="card">
                <div className="card-header header-elements-inline">
                  <h6 className="card-title">My messages</h6>
                  <div className="header-elements">
                    <span><i className="icon-history text-warning mr-2"></i> Jul 7, 10:30</span>
                    <span className="badge bg-success align-self-start ml-3">Online</span>
                  </div>
                </div>


                <div className="card-body py-0">
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="mb-3">
                        <h5 className="font-weight-semibold mb-0">2,345</h5>
                        <span className="text-muted font-size-sm">this week</span>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="mb-3">
                        <h5 className="font-weight-semibold mb-0">3,568</h5>
                        <span className="text-muted font-size-sm">this month</span>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="mb-3">
                        <h5 className="font-weight-semibold mb-0">32,693</h5>
                        <span className="text-muted font-size-sm">all messages</span>
                      </div>
                    </div>
                  </div>
                </div>




                <div id="messages-stats"></div>




                <ul
                  className="nav nav-tabs nav-tabs-solid nav-justified bg-indigo-400 border-x-0 border-bottom-0 border-top-indigo-300 mb-0">
                  <li className="nav-item">
                    <a href="#messages-tue" className="nav-link font-size-sm text-uppercase active" data-toggle="tab">
                      Tuesday
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#messages-mon" className="nav-link font-size-sm text-uppercase" data-toggle="tab">
                      Monday
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#messages-fri" className="nav-link font-size-sm text-uppercase" data-toggle="tab">
                      Friday
                    </a>
                  </li>
                </ul>




                <div className="tab-content card-body">
                  <div className="tab-pane active fade show" id="messages-tue">
                    <ul className="media-list">
                      <li className="media">
                        <div className="mr-3 position-relative">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                          <span className="badge bg-danger-400 badge-pill badge-float border-2 border-white">8</span>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">James Alexander</a>
                            <span className="font-size-sm text-muted">14:58</span>
                          </div>

                          The constitutionally inventoried precariously...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3 position-relative">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                          <span className="badge bg-danger-400 badge-pill badge-float border-2 border-white">6</span>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Margo Baker</a>
                            <span className="font-size-sm text-muted">12:16</span>
                          </div>

                          Pinched a well more moral chose goodness...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Jeremy Victorino</a>
                            <span className="font-size-sm text-muted">09:48</span>
                          </div>

                          Pert thickly mischievous clung frowned well...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Beatrix Diaz</a>
                            <span className="font-size-sm text-muted">05:54</span>
                          </div>

                          Nightingale taped hello bucolic fussily cardinal...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Richard Vango</a>
                            <span className="font-size-sm text-muted">01:43</span>
                          </div>

                          Amidst roadrunner distantly pompously where...
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="messages-mon">
                    <ul className="media-list">
                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Isak Temes</a>
                            <span className="font-size-sm text-muted">Tue, 19:58</span>
                          </div>

                          Reasonable palpably rankly expressly grimy...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Vittorio Cosgrove</a>
                            <span className="font-size-sm text-muted">Tue, 16:35</span>
                          </div>

                          Arguably therefore more unexplainable fumed...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt="" />
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Hilary Talaugon</a>
                            <span className="font-size-sm text-muted">Tue, 12:16</span>
                          </div>

                          Nicely unlike porpoise a kookaburra past more...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Bobbie Seber</a>
                            <span className="font-size-sm text-muted">Tue, 09:20</span>
                          </div>

                          Before visual vigilantly fortuitous tortoise...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Walther Laws</a>
                            <span className="font-size-sm text-muted">Tue, 03:29</span>
                          </div>

                          Far affecting more leered unerringly dishonest...
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="messages-fri">
                    <ul className="media-list">
                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Owen Stretch</a>
                            <span className="font-size-sm text-muted">Mon, 18:12</span>
                          </div>

                          Tardy rattlesnake seal raptly earthworm...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Jenilee Mcnair</a>
                            <span className="font-size-sm text-muted">Mon, 14:03</span>
                          </div>

                          Since hello dear pushed amid darn trite...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Alaster Jain</a>
                            <span className="font-size-sm text-muted">Mon, 13:59</span>
                          </div>

                          Dachshund cardinal dear next jeepers well...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Sigfrid Thisted</a>
                            <span className="font-size-sm text-muted">Mon, 09:26</span>
                          </div>

                          Lighted wolf yikes less lemur crud grunted...
                        </div>
                      </li>

                      <li className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/placeholders/placeholder.jpg"
                               className="rounded-circle" width="36" height="36" alt=""/>
                        </div>

                        <div className="media-body">
                          <div className="d-flex justify-content-between">
                            <a href="#">Sherilyn Mckee</a>
                            <span className="font-size-sm text-muted">Mon, 06:38</span>
                          </div>

                          Less unicorn a however careless husky...
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>




              <div className="card">
                <div className="card-header header-elements-inline">
                  <h6 className="card-title">Daily financials</h6>
                  <div className="header-elements">
                    <div
                      className="form-check form-check-inline form-check-right form-check-switchery form-check-switchery-sm">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-input-switchery" id="realtime"   />
                        Realtime
                      </label>
                    </div>
                    <span className="badge bg-danger-400 badge-pill">+86</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="chart mb-3" id="bullets"></div>

                  <ul className="media-list">
                    <li className="media">
                      <div className="mr-3">
                        <a href="#"
                           className="btn bg-transparent border-pink text-pink rounded-round border-2 btn-icon"><i
                          className="icon-statistics"></i></a>
                      </div>

                      <div className="media-body">
                        Stats for July, 6: <span className="font-weight-semibold">1938</span> orders, <span
                        className="font-weight-semibold text-danger">$4220</span> revenue
                        <div className="text-muted">2 hours ago</div>
                      </div>

                      <div className="ml-3 align-self-center">
                        <a href="#" className="list-icons-item"><i className="icon-more"></i></a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="#"
                           className="btn bg-transparent border-success text-success rounded-round border-2 btn-icon"><i
                          className="icon-checkmark3"></i></a>
                      </div>

                      <div className="media-body">
                        Invoices <a href="#">#4732</a> and <a href="#">#4734</a> have been paid
                        <div className="text-muted">Dec 18, 18:36</div>
                      </div>

                      <div className="ml-3 align-self-center">
                        <a href="#" className="list-icons-item"><i className="icon-more"></i></a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="#"
                           className="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon"><i
                          className="icon-alignment-unalign"></i></a>
                      </div>

                      <div className="media-body">
                        Affiliate commission for June has been paid
                        <div className="text-muted">36 minutes ago</div>
                      </div>

                      <div className="ml-3 align-self-center">
                        <a href="#" className="list-icons-item"><i className="icon-more"></i></a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="#"
                           className="btn bg-transparent border-warning-400 text-warning-400 rounded-round border-2 btn-icon"><i
                          className="icon-spinner11"></i></a>
                      </div>

                      <div className="media-body">
                        Order <a href="#">#37745</a> from July, 1st has been refunded
                        <div className="text-muted">4 minutes ago</div>
                      </div>

                      <div className="ml-3 align-self-center">
                        <a href="#" className="list-icons-item"><i className="icon-more"></i></a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="#"
                           className="btn bg-transparent border-teal text-teal rounded-round border-2 btn-icon"><i
                          className="icon-redo2"></i></a>
                      </div>

                      <div className="media-body">
                        Invoice <a href="#">#4769</a> has been sent to <a href="#">Robert Smith</a>
                        <div className="text-muted">Dec 12, 05:46</div>
                      </div>

                      <div className="ml-3 align-self-center">
                        <a href="#" className="list-icons-item"><i className="icon-more"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
