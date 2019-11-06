import React from "react";
import style from "../advertise/style.less";

const mockData = [
  "https://reviveimg.hellorf.com/www/images/010fe24a60054b6bd71dad77a3668c62.jpg",
  "https://reviveimg.hellorf.com/www/images/c6521ecab805e678843de979622ddae6.jpg",
  "https://reviveimg.hellorf.com/www/images/010fe24a60054b6bd71dad77a3668c62.jpg",
  "https://reviveimg.hellorf.com/www/images/c6521ecab805e678843de979622ddae6.jpg",
  "https://reviveimg.hellorf.com/www/images/010fe24a60054b6bd71dad77a3668c62.jpg",
  "https://reviveimg.hellorf.com/www/images/c6521ecab805e678843de979622ddae6.jpg"
];

export default class Advertise extends React.Component {
  render() {
    var datas: string[] = mockData;
    return (
      <div className={style.container}>
        <ul>
          {datas.map((item, index) => (
            <li>
              <img src={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
