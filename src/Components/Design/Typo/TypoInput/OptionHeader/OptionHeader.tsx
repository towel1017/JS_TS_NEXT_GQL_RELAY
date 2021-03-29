import Image from "next/image";
import React, { useState } from "react";
import * as S from "./Styled";
import { fonts } from "../../../../../assets/fonts.json";

interface Props {}

const fontWeightDummy = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const OptionHeader = (props: Props) => {
  const [fontSize, setFontSize] = useState("16px");
  const [lineHeight, setLineHeight] = useState(1.5);
  const [wordSpacing, setWordSpacing] = useState(0);
  const [fontColor, setFontColor] = useState("#000000");
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };
  const handlelineHeightChange = (e) => {
    setLineHeight(e.target.value);
  };
  const handleWordSpacingChange = (e) => {
    setWordSpacing(e.target.value);
  };
  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };
  const fontWeightList = fontWeightDummy.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));
  return (
    <S.Positioner>
      <S.OptionItemWrapper>
        <Image src="/font_icon.png" width={20} height={20} />
        <select>
          {fonts.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/fontsize_icon.png" width={20} height={20} />
        <input type="text" value={fontSize} onChange={handleFontSizeChange} />
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/bold.png" width={20} height={20} />
        <select>{fontWeightList}</select>
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/font-height.png" width={20} height={20} />
        <input
          type="number"
          value={lineHeight}
          onChange={handlelineHeightChange}
        />
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/spacing.png" width={20} height={20} />
        <input
          type="number"
          value={wordSpacing}
          onChange={handleWordSpacingChange}
        />
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/color-palette.png" width={20} height={20} />
        <input type="text" value={fontColor} onChange={handleFontColorChange} />
      </S.OptionItemWrapper>
      <S.OptionItemWrapper>
        <Image src="/italic.png" width={20} height={20} />
      </S.OptionItemWrapper>
    </S.Positioner>
  );
};

export default OptionHeader;
