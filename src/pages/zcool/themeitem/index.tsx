import React from "react";
import style from "./style.less";

export default class ThemeItem extends React.Component<any> {
  render() {
    const { data } = this.props;

    return (
      <div className={style.container}>
        <img src={data.imageUrl} />
        <div className={style.content}>
          <p className={style.title}>{data.title}</p>
          <p className={style.subtitle}>{data.subTitle}</p>
          <div>
            <img className={style.avatar} src={data.avatar} />
            <span className={style.time}>{data.time}</span>
          </div>
        </div>
      </div>
    );
  }
}
