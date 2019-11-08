import React from "react";
import style from "./style.less";
import Advertise from "./advertise";
import Recommand from "../zcool/recommand";
import Carousel from "../zcool/carousel";
import Pagination from "../zcool/pagination";
import Navigation from "@/pages/zcool/navigation";

export default class ZCool extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Navigation />
        <Carousel />
        <Advertise />
        <Recommand />
        <Pagination />
      </div>
    );
  }
}
