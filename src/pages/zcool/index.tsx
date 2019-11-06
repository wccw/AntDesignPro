import React from "react";
import style from "./style.less";
import Advertise from "./advertise";

export default class ZCool extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Advertise />
      </div>
    );
  }
}
