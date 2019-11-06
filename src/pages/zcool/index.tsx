import React from "react";
import style from "./style.less";
import Advertise from "./advertise";
import Recommand from "../zcool/recommand";

export default class ZCool extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.advertise}>
          <Advertise />
        </div>
        <div>
          <Recommand />
        </div>
      </div>
    );
  }
}
