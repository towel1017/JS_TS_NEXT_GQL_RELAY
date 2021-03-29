import React from "react";
import * as S from "./Styled";

interface Props {}

const TypoButton = (props: Props) => {
  return (
    <S.Positioner>
      <S.TypoInfoTextWrapper>
        <span>16px - Helena Nesu</span>
      </S.TypoInfoTextWrapper>
      <S.TypoLanguageBtnWrapper>
        <label>
          <input type="radio" name="language" value="en" checked />
          English
        </label>
        <label>
          <input type="radio" name="language" value="ko" />
          한국어
        </label>
      </S.TypoLanguageBtnWrapper>
      <S.TypoButtonWrapper>
        <button>Cancel</button>
        <button>Done</button>
      </S.TypoButtonWrapper>
    </S.Positioner>
  );
};

export default TypoButton;
