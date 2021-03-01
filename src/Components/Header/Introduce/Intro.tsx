import Image from 'next/image'
import React from 'react'
import * as S from "./Styled"

interface Props {
    
}

const Intro = (props: Props) => {
    return (
    <S.IntroWrapper>
        <S.IntroTextWrapper>
            <S.IntroTextFirst>
                DS Tool
            </S.IntroTextFirst>
            <S.IntroTextSecond>
                디자이너와 프론트엔드 개발자를 위한 <br/>
            </S.IntroTextSecond>
            <S.IntroTextSecond>
                디자인 툴 서비스 DSTool
            </S.IntroTextSecond>
        </S.IntroTextWrapper>
        <S.IntroProfileWrapper>
            <S.IntroProfileImage alt="developer" src="/lui.png" width={400} height={400}  />
        </S.IntroProfileWrapper>
    </S.IntroWrapper>
    )
}

export default Intro
