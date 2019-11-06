import React from "react";
import { Pagination } from "antd";
import style from "./style.less";

export default class PaginationBar extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Pagination defaultCurrent={1} total={500}></Pagination>
      </div>
    );
  }
}
