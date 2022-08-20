import { useState } from "react";
import Input from "../input";
import "./style.css";

const decemal = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

export default function Palette() {
  const [colors, setColors] = useState(() => [123, 123, 123]);

  const getColorCode = (value) => {
    const array = value.replace("#", "").split("");
    const array_size = 2;
    const sliced_array = [];

    for (let i = 0; i < array.length; i += array_size) {
      sliced_array.push(array.slice(i, i + array_size));
    }
    const arrayDecemal = sliced_array.map((el) => {
      return (decemal[el[0]] || +el[0]) * 15 + (decemal[el[0]] || +el[0]);
    });
    setColors(arrayDecemal);
  };

  const getTextValue = () => {
    let rgbValue;
    if (!colors.every((el) => Number.isNaN(el))) {
      rgbValue = "rgb(" + colors.join(", ") + ")";
    } else {
      rgbValue = "Ошибка";
    }
    return rgbValue
  };

  return (
    <div className="pallete">
      <div className="pallete__wrap">
        <Input getColorCode={getColorCode} />
        <div
          style={{
            background: getTextValue() === "Ошибка" ? "red" : getTextValue(),
          }}
          className="palette__rgb"
        >
          {getTextValue()}
        </div>
      </div>
    </div>
  );
}
