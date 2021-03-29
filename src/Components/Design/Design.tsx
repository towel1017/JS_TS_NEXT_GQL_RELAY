import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorStore } from "../../Store/ColorStore";
import { componentState } from "../../Store/ComponentStore";
import Buttons from "./Buttons/Buttons";
import Color from "./Color/Color";
import ColorInput from "./Color/ColorInput/ColorInput";
import * as S from "./Styled";
import TypoInput from "./Typo/TypoInput/TypoInput";

interface Props {}

const setComponentInput = (component) => {
  switch (component) {
    case "color":
      return <ColorInput />;
    case "typo":
      return <TypoInput />;
  }
};

const Design = (props: Props) => {
  const [component, setComponent] = useRecoilState(componentState);
  const [colors, setColors] = useRecoilState(colorStore);
  const [isEdited, setEdited] = useState(false);
  const handleColorEdit = () => {
    setEdited(!isEdited);
  };
  const handleColorDelete = (colorListId) => {
    setColors(colors.filter((item) => item.colorListId !== colorListId));
  };
  const showColorList = colors.map(({ colorListId, colorList }) => {
    return (
      <Color
        key={colorListId}
        isEdited={isEdited}
        colorListId={colorListId}
        colorItemList={colorList}
        handleColorEdit={handleColorEdit}
        handleColorDelete={handleColorDelete}
      />
    );
  });
  return (
    <S.Positioner>
      {showColorList}
      {setComponentInput(component)}
      <Buttons setComponent={setComponent} />
    </S.Positioner>
  );
};

export default Design;
