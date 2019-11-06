import React from "react";
import style from "../recommand/style.less";
import ThemeItem from "../themeitem";

const mockData = [
  {
    imageUrl:
      "https://img.zcool.cn/community/0162125dc180a3a801209e1f3f9ba5.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/018ee75dc22c93a8012163bae0d6dc.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0114655dc1b0b5a801209e1f9687e1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0125305dc21c59a801209e1f5ddaa1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/031334f5dc0e058a801209e1f608b58.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0162125dc180a3a801209e1f3f9ba5.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/018ee75dc22c93a8012163bae0d6dc.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0114655dc1b0b5a801209e1f9687e1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0125305dc21c59a801209e1f5ddaa1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/031334f5dc0e058a801209e1f608b58.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01bd345dc14b59a801209e1f2f3ac1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01706b5dc10dd5a8012163ba58d826.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0181c35dbbd704a801209e1f0943e9.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0162125dc180a3a801209e1f3f9ba5.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/018ee75dc22c93a8012163bae0d6dc.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0114655dc1b0b5a801209e1f9687e1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0125305dc21c59a801209e1f5ddaa1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/031334f5dc0e058a801209e1f608b58.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01bd345dc14b59a801209e1f2f3ac1.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01e8095dc10cb4a8012163ba3da23b.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/01706b5dc10dd5a8012163ba58d826.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0181c35dbbd704a801209e1f0943e9.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/031fe7d5dc0ecaca801209e1fce5fb3.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  },
  {
    imageUrl:
      "https://img.zcool.cn/community/0181c35dbbd704a801209e1f0943e9.jpg@260w_195h_1c_1e_1o_100sh.jpg",
    title: "阴阳师-高能来袭",
    subTitle: "平面",
    watch: 3716,
    reply: 27,
    good: 195,
    avatar:
      "https://img.zcool.cn/community/01c1c55ccbcad2a801208f8bed9613.jpg@80w_80h_1c_1e_1o_100sh.jpg",
    time: "16小时前"
  }
];

export default class Recommand extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <ul>
          {mockData.map((item, index) => (
            <ThemeItem data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
