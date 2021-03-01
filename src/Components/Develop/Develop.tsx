import React from 'react'
import Image from "next/image";
import * as S from "./Styled";

interface Props {
    
}

const Develop = (props: Props) => {
    return (
        <S.Positioner>
            <S.DeveloperProFileWrapper>
                <S.DeveloperProfileImage src="/lui.png" alt="profileImage" width={200} height={200}/>
                <span>루이</span>
            </S.DeveloperProFileWrapper>
            <S.DeveloperProfileTextWrapper>
                <S.ProfilePersonText>
                    퍼블리셔 및 프론트엔드 개발자를 위한 
                </S.ProfilePersonText>
                <S.ProfileToolText>
                    디자인 툴 개발
                </S.ProfileToolText>
                <S.ProfileGithubText href="https://github.com/towel1017">
                    개발자 Github 바로가기 {">"}
                </S.ProfileGithubText>
            </S.DeveloperProfileTextWrapper>
        </S.Positioner>
    )
}

export default Develop
