import Image from "next/image";
import React from "react";
import * as S from "./Styled";

interface Props {
  setComponent: (component?: string) => void;
}

const Buttons = (props: Props) => {
  const { setComponent } = props;
  const changeComponentColor = () => {
    setComponent("color");
  };
  const changeComponentTypo = () => {
    setComponent("typo");
  };
  const changeComponentMarkdown = () => {
    setComponent("markdown");
  };
  return (
    <S.ButtonsWrapper>
      <Image
        onClick={changeComponentColor}
        src="/color-palette.png"
        width={30}
        height={30}
      />
      <Image
        onClick={changeComponentTypo}
        src="/font.png"
        width={30}
        height={30}
      />
      <Image
        onClick={changeComponentMarkdown}
        src="/m.png"
        width={30}
        height={30}
      />
    </S.ButtonsWrapper>
  );
};

export default Buttons;
