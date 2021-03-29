import React from "react";
import * as S from "./Styled";

interface Props {}

const MypageProject = (props: Props) => {
  return (
    <S.Positioner>
      <S.MypageProfileProjectWrapper>
        <S.ProjectTitle>내 프로젝트</S.ProjectTitle>
        <S.ProjectTitleWrapper>
          <span>프로젝트 이름</span>
          <span>프로젝트 인원</span>
          <span>권한정보</span>
        </S.ProjectTitleWrapper>
        <S.ProjectList>
          <S.ProjectItemList>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
            <S.ProjectItem>
              <span>상우 프로젝트</span>
              <span>지승우, 김준우, 김상현</span>
              <span>Admin</span>
            </S.ProjectItem>
          </S.ProjectItemList>
        </S.ProjectList>
      </S.MypageProfileProjectWrapper>
    </S.Positioner>
  );
};

export default MypageProject;
