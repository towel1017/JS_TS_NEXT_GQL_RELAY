import React from "react";
import * as S from "./Styled";

interface Props {
  name: string;
  email: string;
}

const MypageInfo = ({ name, email }: Props) => {
  return (
    <S.MypageProFileWrapper>
      <S.MypageProfileImageWrapper>
        <S.MypageProfileImage
          src="/lui.png"
          alt="profileImage"
          width={300}
          height={300}
        />
      </S.MypageProfileImageWrapper>
      <S.MypagerProfileDetailWrapper>
        <S.MypageProfileDetailNick> {name} </S.MypageProfileDetailNick>
        <S.MypageProfileDetailInfoWrapper>
          <span>Email : {email}</span>
        </S.MypageProfileDetailInfoWrapper>
      </S.MypagerProfileDetailWrapper>
    </S.MypageProFileWrapper>
  );
};

export default MypageInfo;
