import React from "react";
import MypageInfo from "./MypageInfo/MypageInfo";
import MypageProject from "./MypageProject/MypageProject";
import * as S from "./Styled";

interface Props {}

const Mypage = (props: Props) => {
  return (
    <S.Positioner>
      <MypageInfo name={"루이"} email={"tlsdltkr2530@gmail.com"} />
      <MypageProject />
    </S.Positioner>
  );
};

export default Mypage;
