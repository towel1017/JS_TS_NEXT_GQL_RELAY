import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { colorStore } from "../../../../Store/ColorStore";
import { componentState } from "../../../../Store/ComponentStore";
import * as S from "./Styled";

interface Props {}
let colorListId = 2;
let id = 3;

const ColorInput = (props: Props) => {
  const [colors, setColors] = useRecoilState(colorStore);
  const [component, setComponent] = useRecoilState(componentState);
  const [isFinish, setFinish] = useState(false);
  const [color, setColorInput] = useState("");
  const appendColorsArray = [];
  const handleChange = (e) => {
    setColorInput(e.target.value);
  };
  const AddColors = () => {
    setComponent("default");
    setFinish(true);
    const colorArr = color.replace(/(\s*)/g, "").split(",");
    console.log(colorArr);
    for (const item in colorArr) {
      console.log(colorArr[item]);
      appendColorsArray.push({ id: id++, color: colorArr[item] });
    }
    console.log(appendColorsArray);
    setColors([
      ...colors,
      { colorListId: colorListId, colorList: [...appendColorsArray] },
    ]);
  };
  const formCheck = () => {
    const colorArr = color.replace(/(\s*)/g, "").split(",");
    const re = new RegExp(/^#[a-f0-9]{6}/);
    const isFormCheck = colorArr.every((item) => {
      return re.test(item);
    });
    console.log(isFormCheck);
    if (isFormCheck) {
      AddColors();
      setColorInput("");
      setComponent("");
      setFinish(false);
      console.log(component, isFinish);
    } else {
      alert(
        "양식이 맞지 않습니다.\n#16진수 색상표를 적어주시고,\n여러개를 적을 경우 쉼표로 구분해주세요"
      );
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      formCheck();
    }
  };
  return (
    <S.Positioner>
      <S.ColorInputWrapper
        type="text"
        placeholder="> Color... ex) #ffffff, #f0f0f3"
        value={color}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </S.Positioner>
  );
};

export default ColorInput;
