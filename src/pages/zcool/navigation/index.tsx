import React from "react";
import style from "./style.less";
import { Dropdown, Menu } from "antd";

export default class Navigation extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2st menu item</Menu.Item>
      </Menu>
    );
    return (
      <div className={style.container}>
        <div className={style.logo}>
          <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
        </div>
        <div className={style.menu}>
          <ul>
            <li>
              <Dropdown overlay={menu}>
                <a href="#">首页</a>
              </Dropdown>
            </li>
            <li>
              <a href="#">设计语言</a>
            </li>
            <li>
              <a href="#">组件</a>
            </li>
            <li>
              <a href="#">生态</a>
            </li>
            <li>
              <a href="#">社区</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
