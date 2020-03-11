import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import BuyerMessagesHeader from "./BuyerMessagesHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";
const CATEGORIES = [

]
class  BuyerMessages extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    return(
      <main>
        <BuyerMessagesHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="card-header bg-transparent header-elements-inline">
                  <span className="text-uppercase font-size-sm font-weight-semibold">Tin nhắn từ khách hàng</span>
                  <div className="header-elements">
                    <span className="badge bg-success badge-pill">32 cần trả lời</span>
                  </div>
                </div>

                <ul className="media-list media-list-linked">
                 <li>
                  <span href="#" className="media buyer-message-item">
                    <div className="mr-3">
                      <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                           className="rounded-circle" width="40" height="40" alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">James Alexander</div>
                      <span className="text-muted font-size-sm"><a href="#">ABC-XYZ-123</a></span>
                    </div>
                    <div className="align-self-center ml-3">
                      <span className="badge badge-mark bg-success border-success"></span>
                    </div>
                  </span>
                </li>
                  <li>
                  <span href="#" className="media buyer-message-item">
                    <div className="mr-3">
                      <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                           className="rounded-circle" width="40" height="40" alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">James Alexander</div>
                      <span className="text-muted font-size-sm"><a href="#">ABC-XYZ-123</a></span>
                    </div>
                    <div className="align-self-center ml-3">
                      <span className="badge badge-mark bg-success border-success"></span>
                    </div>
                  </span>
                  </li>
                  <li>
                  <span href="#" className="media buyer-message-item">
                    <div className="mr-3">
                      <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                           className="rounded-circle" width="40" height="40" alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">James Alexander</div>
                      <span className="text-muted font-size-sm"><a href="#">ABC-XYZ-123</a></span>
                    </div>
                    <div className="align-self-center ml-3">
                      <span className="badge badge-mark bg-success border-success"></span>
                    </div>
                  </span>
                  </li>
                  <li>
                  <span href="#" className="media buyer-message-item">
                    <div className="mr-3">
                      <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                           className="rounded-circle" width="40" height="40" alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">James Alexander</div>
                      <span className="text-muted font-size-sm"><a href="#">ABC-XYZ-123</a></span>
                    </div>
                    <div className="align-self-center ml-3">
                      <span className="badge badge-mark bg-warning border-warning"></span>
                    </div>
                  </span>
                  </li>
                  <li>
                  <span href="#" className="media buyer-message-item">
                    <div className="mr-3">
                      <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                           className="rounded-circle" width="40" height="40" alt="" />
                    </div>
                    <div className="media-body">
                      <div className="media-title font-weight-semibold">James Alexander</div>
                      <span className="text-muted font-size-sm">Câu hỏi từ khách hàng</span>
                    </div>
                    <div className="align-self-center ml-3">
                      <span className="badge badge-mark bg-light-300 border-light-300"></span>
                    </div>
                  </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Nguyễn thị ABC XYZ</h5>
                  <div className="header-elements">
                    <div className="list-icons">
                      <a className="list-icons-item" data-action="collapse"></a>
                      <a className="list-icons-item" data-action="reload"></a>
                      <a className="list-icons-item" data-action="remove"></a>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <ul className="media-list media-chat media-chat-scrollable mb-3">
                    <li className="media content-divider justify-content-center text-muted mx-0">Monday, Feb 10</li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Below mounted advantageous spread yikes bat stubbornly crud
                          a and a excepting
                        </div>
                        <div className="font-size-sm text-muted mt-2">Mon, 9:54 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media media-chat-item-reverse">
                      <div className="media-body">
                        <div className="media-chat-item">Far squid and that hello fidgeted and when. As this oh darn
                          but slapped casually husky sheared that cardinal hugely one and some unnecessary
                          factiously hedgehog a feeling one rudely much but one owing sympathetic regardless more
                          astonishing evasive tasteful much.
                        </div>
                        <div className="font-size-sm text-muted mt-2">Mon, 10:24 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>

                      <div className="ml-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Darn over sour then cynically less roadrunner up some cast
                          buoyant. Macaw krill when and upon less contrary warthog jeez some koala less since
                          therefore minimal.
                        </div>
                        <div className="font-size-sm text-muted mt-2">Mon, 10:56 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media media-chat-item-reverse">
                      <div className="media-body">
                        <div className="media-chat-item">Some upset impious a and submissive when far crane the
                          belched coquettishly. More the puerile dove wherever
                        </div>
                        <div className="font-size-sm text-muted mt-2">Mon, 11:29 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>

                      <div className="ml-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>
                    </li>

                    <li className="media content-divider justify-content-center text-muted mx-0">Yesterday</li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Regardless equitably hello heron glum cassowary jocosely
                          before reliably a jeepers wholehearted shuddered more that some where far by koala.
                        </div>
                        <div className="font-size-sm text-muted mt-2">Tue, 6:40 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Crud reran and while much withdrew ardent much crab hugely
                          met dizzily that more jeez gent equivalent unsafely far one hesitant so therefore.
                        </div>
                        <div className="font-size-sm text-muted mt-2">Tue, 10:28 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media media-chat-item-reverse">
                      <div className="media-body">
                        <div className="media-chat-item">Thus superb the tapir the wallaby blank frog execrably much
                          since dalmatian by in hot. Uninspiringly arose mounted stared one curt safe
                        </div>
                        <div className="font-size-sm text-muted mt-2">Tue, 8:12 am <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>

                      <div className="ml-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>
                    </li>

                    <li className="media content-divider justify-content-center text-muted mx-0">Today</li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Tolerantly some understood this stubbornly after snarlingly
                          frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.
                        </div>
                        <div className="font-size-sm text-muted mt-2">Wed, 4:20 pm <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media media-chat-item-reverse">
                      <div className="media-body">
                        <div className="media-chat-item">Satisfactorily strenuously while sleazily dear
                          frustratingly insect menially some shook far sardonic badger telepathic much jeepers
                          immature much hey.
                        </div>
                        <div className="font-size-sm text-muted mt-2">2 hours ago <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>

                      <div className="ml-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>
                    </li>

                    <li className="media">
                      <div className="mr-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>

                      <div className="media-body">
                        <div className="media-chat-item">Grunted smirked and grew less but rewound much despite and
                          impressive via alongside out and gosh easy manatee dear ineffective yikes.
                        </div>
                        <div className="font-size-sm text-muted mt-2">13 minutes ago <a href="#"><i
                          className="icon-pin-alt ml-2 text-muted"></i></a></div>
                      </div>
                    </li>

                    <li className="media media-chat-item-reverse">
                      <div className="media-body">
                        <div className="media-chat-item"><i className="icon-menu"></i></div>
                      </div>

                      <div className="ml-3">
                        <a href="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg">
                          <img src="https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg"
                               className="rounded-circle" width="40" height="40" alt=""/>
                        </a>
                      </div>
                    </li>
                  </ul>

                  <textarea name="enter-message" className="form-control mb-3" rows="3" cols="1"
                            placeholder="Enter your message..."></textarea>

                  <div className="d-flex align-items-center">
                    <div className="list-icons list-icons-extended">
                      <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body"
                         title="Send photo"><i className="icon-file-picture"></i></a>
                      <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body"
                         title="Send video"><i className="icon-file-video"></i></a>
                      <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body"
                         title="Send file"><i className="icon-file-plus"></i></a>
                    </div>

                    <button type="button" className="btn bg-teal-400 btn-labeled btn-labeled-right ml-auto"><b><i
                      className="icon-paperplane"></i></b> Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    )
  }
}

export default BuyerMessages

