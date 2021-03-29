import React from "react";
import * as S from "./Styled";
import type { ColorItemType } from "../../../../Store/ColorStore";

const ColorItem = (props: ColorItemType) => {
  const { colorId, color } = props;
  const handleColorCopy = () => {};
  return (
    <S.Positioner>
      <S.ColorWrappepr color={color} onClick={handleColorCopy}>
        <span>Copy!</span>
      </S.ColorWrappepr>
      <S.ColorText>{color}</S.ColorText>
    </S.Positioner>
  );
};

export default ColorItem;
