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
                <MqNavItemHead className="nav-link">
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
                    <MqNavItemHead href="../seed/sidebar_none.html" className="nav-link">Quản lý mã giảm giá</MqNavItemHead>
                  </MqNavItem>
                </MqNav>
              </MqNavItem>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-color-sampler"></i> <span>Themes</span></a>

                <ul className="nav nav-group-sub" data-submenu-title="Themes">
                  <li className="nav-item"><a href="index.html" className="nav-link active">Default</a></li>
                  <li className="nav-item"><a href="../../../LTR/material/full/index.html"
                                              className="nav-link">Material</a></li>
                  <li className="nav-item"><a href="../../../LTR/dark/full/index.html"
                                              className="nav-link disabled">Dark <span
                    className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                  <li className="nav-item"><a href="../../../LTR/clean/full/index.html"
                                              className="nav-link disabled">Clean <span
                    className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-stack"></i> <span>Starter kit</span></a>

                <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                  <li className="nav-item"><a href="../seed/layout_nav_horizontal.html" className="nav-link">Horizontal
                    navigation</a></li>
                  <li className="nav-item"><a href="../seed/sidebar_none.html" className="nav-link">No sidebar</a>
                  </li>
                  <li className="nav-item"><a href="../seed/sidebar_main.html" className="nav-link">1 sidebar</a>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">2 sidebars</a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item"><a href="../seed/sidebar_secondary.html" className="nav-link">Secondary
                        sidebar</a></li>
                      <li className="nav-item"><a href="../seed/sidebar_right.html" className="nav-link">Right
                        sidebar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">3 sidebars</a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item"><a href="../seed/sidebar_right_hidden.html" className="nav-link">Right
                        sidebar hidden</a></li>
                      <li className="nav-item"><a href="../seed/sidebar_right_visible.html" className="nav-link">Right
                        sidebar visible</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">Content sidebars</a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item"><a href="../seed/sidebar_content_left.html" className="nav-link">Left
                        sidebar</a></li>
                      <li className="nav-item"><a href="../seed/sidebar_content_right.html" className="nav-link">Right
                        sidebar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a href="../seed/layout_boxed.html" className="nav-link">Boxed layout</a>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="../seed/navbar_fixed_main.html" className="nav-link">Fixed main
                    navbar</a></li>
                  <li className="nav-item"><a href="../seed/navbar_fixed_secondary.html" className="nav-link">Fixed
                    secondary navbar</a></li>
                  <li className="nav-item"><a href="../seed/navbar_fixed_both.html" className="nav-link">Both
                    navbars fixed</a></li>
                  <li className="nav-item"><a href="../seed/layout_fixed.html" className="nav-link">Fixed layout</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="changelog.html" className="nav-link">
                  <i className="icon-list-unordered"></i>
                  <span>Changelog</span>
                  <span className="badge bg-blue-400 align-self-center ml-auto">2.0</span>
                </a>
              </li>
              <li className="nav-item"><a href="../../../RTL/default/full/index.html" className="nav-link"><i
                className="icon-width"></i> <span>RTL version</span></a></li>



              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">Forms</div>
                <i className="icon-menu" title="Forms"></i></li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-pencil3"></i> <span>Form components</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Form components">
                  <li className="nav-item"><a href="form_inputs.html" className="nav-link">Basic inputs</a></li>
                  <li className="nav-item"><a href="form_checkboxes_radios.html"
                                              className="nav-link">Checkboxes &amp; radios</a></li>
                  <li className="nav-item"><a href="form_select2.html" className="nav-link">Select2 selects</a></li>
                  <li className="nav-item"><a href="form_multiselect.html" className="nav-link">Bootstrap
                    multiselect</a></li>
                  <li className="nav-item"><a href="form_input_groups.html" className="nav-link">Input groups</a>
                  </li>
                  <li className="nav-item"><a href="form_controls_extended.html" className="nav-link">Extended
                    controls</a></li>
                  <li className="nav-item"><a href="form_floating_labels.html" className="nav-link">Floating
                    labels</a></li>
                  <li className="nav-item"><a href="form_tag_inputs.html" className="nav-link">Tag inputs</a></li>
                  <li className="nav-item"><a href="form_dual_listboxes.html" className="nav-link">Dual
                    Listboxes</a></li>
                  <li className="nav-item"><a href="form_validation.html" className="nav-link">Validation</a></li>
                  <li className="nav-item"><a href="form_wizard.html" className="nav-link">Form wizard</a></li>
                  <li className="nav-item"><a href="form_actions.html" className="nav-link">Form actions</a></li>
                  <li className="nav-item"><a href="form_inputs_grid.html" className="nav-link">Inputs grid</a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-file-css"></i> <span>JSON forms</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="JSON forms">
                  <li className="nav-item"><a href="alpaca_basic.html" className="nav-link">Basic inputs</a></li>
                  <li className="nav-item"><a href="alpaca_advanced.html" className="nav-link">Advanced inputs</a>
                  </li>
                  <li className="nav-item"><a href="alpaca_controls.html" className="nav-link">Controls</a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-spell-check"></i> <span>Text editors</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Text editors">
                  <li className="nav-item"><a href="editor_summernote.html" className="nav-link">Summernote
                    editor</a></li>
                  <li className="nav-item"><a href="editor_ckeditor.html" className="nav-link">CKEditor</a></li>
                  <li className="nav-item"><a href="editor_trumbowyg.html" className="nav-link">Trumbowyg editor</a>
                  </li>
                  <li className="nav-item"><a href="editor_code.html" className="nav-link">Code editor</a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-select2"></i> <span>Pickers</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Pickers">
                  <li className="nav-item"><a href="picker_date.html" className="nav-link">Date &amp; time
                    pickers</a></li>
                  <li className="nav-item"><a href="picker_color.html" className="nav-link">Color pickers</a></li>
                  <li className="nav-item"><a href="picker_location.html" className="nav-link">Location pickers</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-insert-template"></i> <span>Form layouts</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Form layouts">
                  <li className="nav-item"><a href="form_layout_vertical.html" className="nav-link">Vertical
                    form</a></li>
                  <li className="nav-item"><a href="form_layout_vertical_styled.html" className="nav-link disabled">Custom
                    styles <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="form_layout_horizontal.html" className="nav-link">Horizontal
                    form</a></li>
                  <li className="nav-item"><a href="form_layout_horizontal_styled.html"
                                              className="nav-link disabled">Custom styles <span
                    className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a></li>
                </ul>
              </li>

              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">Components</div>
                <i className="icon-menu" title="Components"></i></li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-grid"></i> <span>Basic components</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Basic components">
                  <li className="nav-item"><a href="components_modals.html" className="nav-link">Modals</a></li>
                  <li className="nav-item"><a href="components_dropdowns.html" className="nav-link">Dropdown
                    menus</a></li>
                  <li className="nav-item"><a href="components_tabs.html" className="nav-link">Tabs component</a>
                  </li>
                  <li className="nav-item"><a href="components_pills.html" className="nav-link">Pills component</a>
                  </li>
                  <li className="nav-item"><a href="components_collapsible.html"
                                              className="nav-link">Collapsible</a></li>
                  <li className="nav-item"><a href="components_navs.html" className="nav-link">Navs</a></li>
                  <li className="nav-item"><a href="components_buttons.html" className="nav-link">Buttons</a></li>
                  <li className="nav-item"><a href="components_popups.html" className="nav-link">Tooltips and
                    popovers</a></li>
                  <li className="nav-item"><a href="components_alerts.html" className="nav-link">Alerts</a></li>
                  <li className="nav-item"><a href="components_pagination.html" className="nav-link">Pagination</a>
                  </li>
                  <li className="nav-item"><a href="components_badges.html" className="nav-link">Badges</a></li>
                  <li className="nav-item"><a href="components_progress.html" className="nav-link">Progress</a></li>
                  <li className="nav-item"><a href="components_breadcrumbs.html"
                                              className="nav-link">Breadcrumbs</a></li>
                  <li className="nav-item"><a href="components_media.html" className="nav-link">Media objects</a>
                  </li>
                  <li className="nav-item"><a href="components_scrollspy.html" className="nav-link">Scrollspy</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-puzzle2"></i> <span>Content styling</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Content styling">
                  <li className="nav-item"><a href="content_page_header.html" className="nav-link">Page header</a>
                  </li>
                  <li className="nav-item"><a href="content_page_footer.html" className="nav-link disabled">Page
                    footer <span className="badge bg-transparent align-self-center ml-auto">Coming soon</span></a>
                  </li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="content_cards.html" className="nav-link">Cards</a></li>
                  <li className="nav-item"><a href="content_cards_content.html" className="nav-link">Card
                    content</a></li>
                  <li className="nav-item"><a href="content_cards_layouts.html" className="nav-link">Card
                    layouts</a></li>
                  <li className="nav-item"><a href="content_cards_header.html" className="nav-link">Card header
                    elements</a></li>
                  <li className="nav-item"><a href="content_cards_footer.html" className="nav-link">Card footer
                    elements</a></li>
                  <li className="nav-item"><a href="content_cards_draggable.html" className="nav-link">Draggable
                    cards</a></li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="content_text_styling.html" className="nav-link">Text styling</a>
                  </li>
                  <li className="nav-item"><a href="content_typography.html" className="nav-link">Typography</a>
                  </li>
                  <li className="nav-item"><a href="content_helpers.html" className="nav-link">Helper classes</a>
                  </li>
                  <li className="nav-item"><a href="content_helpers_flex.html" className="nav-link">Flex
                    utilities</a></li>
                  <li className="nav-item"><a href="content_syntax_highlighter.html" className="nav-link">Syntax
                    highlighter</a></li>
                  <li className="nav-item"><a href="content_grid.html" className="nav-link">Grid system</a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-gift"></i> <span>Extra components</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Extra components">
                  <li className="nav-item"><a href="extra_pnotify.html" className="nav-link">PNotify
                    notifications</a></li>
                  <li className="nav-item"><a href="extra_jgrowl_noty.html" className="nav-link">jGrowl and Noty
                    notifications</a></li>
                  <li className="nav-item"><a href="extra_sweetalert.html" className="nav-link">SweetAlert
                    notifications</a></li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="extra_sliders_noui.html" className="nav-link">NoUI sliders</a>
                  </li>
                  <li className="nav-item"><a href="extra_sliders_ion.html" className="nav-link">Ion range
                    sliders</a></li>
                  <li className="nav-item"><a href="extra_trees.html" className="nav-link">Dynamic tree views</a>
                  </li>
                  <li className="nav-item"><a href="extra_context_menu.html" className="nav-link">Context menu</a>
                  </li>
                  <li className="nav-item"><a href="extra_fab.html" className="nav-link">Floating action buttons</a>
                  </li>
                  <li className="nav-item"><a href="extra_session_timeout.html" className="nav-link">Session
                    timeout</a></li>
                  <li className="nav-item"><a href="extra_idle_timeout.html" className="nav-link">Idle timeout</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-droplet2"></i> <span>Color system</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Color system">
                  <li className="nav-item"><a href="colors_primary.html" className="nav-link">Primary palette</a>
                  </li>
                  <li className="nav-item"><a href="colors_danger.html" className="nav-link">Danger palette</a></li>
                  <li className="nav-item"><a href="colors_success.html" className="nav-link">Success palette</a>
                  </li>
                  <li className="nav-item"><a href="colors_warning.html" className="nav-link">Warning palette</a>
                  </li>
                  <li className="nav-item"><a href="colors_info.html" className="nav-link">Info palette</a></li>
                  <li className="nav-item-divider"></li>
                  <li className="nav-item"><a href="colors_pink.html" className="nav-link">Pink palette</a></li>
                  <li className="nav-item"><a href="colors_violet.html" className="nav-link">Violet palette</a></li>
                  <li className="nav-item"><a href="colors_purple.html" className="nav-link">Purple palette</a></li>
                  <li className="nav-item"><a href="colors_indigo.html" className="nav-link">Indigo palette</a></li>
                  <li className="nav-item"><a href="colors_blue.html" className="nav-link">Blue palette</a></li>
                  <li className="nav-item"><a href="colors_teal.html" className="nav-link">Teal palette</a></li>
                  <li className="nav-item"><a href="colors_green.html" className="nav-link">Green palette</a></li>
                  <li className="nav-item"><a href="colors_orange.html" className="nav-link">Orange palette</a></li>
                  <li className="nav-item"><a href="colors_brown.html" className="nav-link">Brown palette</a></li>
                  <li className="nav-item"><a href="colors_grey.html" className="nav-link">Grey palette</a></li>
                  <li className="nav-item"><a href="colors_slate.html" className="nav-link">Slate palette</a></li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-spinner2 spinner"></i>
                  <span>Animations</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Animations">
                  <li className="nav-item"><a href="animations_css3.html" className="nav-link">CSS3 animations</a>
                  </li>
                  <li className="nav-item nav-item-submenu">
                    <a href="#" className="nav-link">Velocity animations</a>
                    <ul className="nav nav-group-sub">
                      <li className="nav-item"><a href="animations_velocity_basic.html" className="nav-link">Basic
                        usage</a></li>
                      <li className="nav-item"><a href="animations_velocity_ui.html" className="nav-link">UI pack
                        effects</a></li>
                      <li className="nav-item"><a href="animations_velocity_examples.html" className="nav-link">Advanced
                        examples</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item-submenu">
                <a href="#" className="nav-link"><i className="icon-thumbs-up2"></i> <span>Icons</span></a>
                <ul className="nav nav-group-sub" data-submenu-title="Icons">
                  <li className="nav-item"><a href="icons_icomoon.html" className="nav-link">Icomoon</a></li>
                  <li className="nav-item"><a href="icons_material.html" className="nav-link">Material</a></li>
                  <li className="nav-item"><a href="icons_fontawesome.html" className="nav-link">Font awesome</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>


        </div>


      </div>
    );
  }
}

export default DefaultMainSideBar
