import React from "react";
import style from "./style.less";
import Advertise from "./advertise";
import Recommand from "../zcool/recommand";
import Carousel from "../zcool/carousel";

export default class ZCool extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Carousel />
        <Advertise />
        <Recommand />
      </div>
    );
  }
}
