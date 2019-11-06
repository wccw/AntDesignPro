import React from "react";
import { Carousel } from "antd";
import style from "./style.less";

export default class CarouselBar extends React.Component {
  render() {
    return (
      <div>
        <Carousel className={style.container} autoplay>
          <div>
            <img src="https://img.zcool.cn/community/01e3495dc223a8a801209e1fdfa19b.png@1380w" />
          </div>
          <div>
            <img src="https://img.zcool.cn/community/01d15c5dc223b9a8012163badaf549.png@1380w" />
          </div>
          <div>
            <img src="https://img.zcool.cn/community/01a2d15dc223d2a801209e1f06068a.png@1380w" />
          </div>
        </Carousel>
      </div>
    );
  }
}
