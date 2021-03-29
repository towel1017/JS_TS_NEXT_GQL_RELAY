import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { typoStore } from "../../../../Store/TypoStore";
import TypoButton from "../TypoButton/TypoButton";
import OptionHeader from "./OptionHeader/OptionHeader";
import * as S from "./Styled";

interface Props {}
const koLorem =
  "오직 트고, 인류의 철환하였는가? 현저하게 평화스러운 소리다.이것은 위하여서 끓는다. 일월과 그들의 방황하였으며, 이 황금시대의 꽃이 이상을 설레는 같은 끓는다. 사는가 못하다 바로 힘차게 영원히 날카로우나 기관과 일월과 칼이다";
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const TypoInput = (props: Props) => {
  const [typoAttr, setTypoAttr] = useRecoilState(typoStore);
  useEffect(() => {
    if (typoAttr.language === "ko") {
      setTypoAttr({ ...typoAttr, text: koLorem });
    } else {
      setTypoAttr({ ...typoAttr, text: lorem });
    }
  }, [typoAttr.language]);
  const handleTypoTextChange = (e) => {
    setTypoAttr({ ...typoAttr, text: e.target.value });
  };
  return (
    <S.Positioner>
      {/** 폰트 및 색상,  */}
      <S.OptionHeaderWrapper>
        <OptionHeader />
      </S.OptionHeaderWrapper>
      {/** text 작성 폼 */}
      <S.TypoInputWrapper>
        <S.TypoInput
          {...typoAttr}
          value={typoAttr.text}
          onChange={handleTypoTextChange}
        />
      </S.TypoInputWrapper>
      {/** 영어 한국어 설정 및 Done/Cancel 버튼 */}
      <S.TypoButtonWrapper>
        <TypoButton />
      </S.TypoButtonWrapper>
    </S.Positioner>
  );
};

export default TypoInput;
