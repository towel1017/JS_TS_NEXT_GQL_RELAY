import Link from 'next/link';
import React from 'react'
import Intro from './Introduce/Intro';
import * as S from "./Styled";

interface Props {
    
}

const Header = (props: Props) => {
    return (
    <>
        <S.Positioner>
            <S.TitleWrapper>
                <S.TitleText>
                    DS Tool
                </S.TitleText>
                <S.DeveloperLinkWrapper>
                    <Link href="/develop">
                        <span>
                        Developer Info {">"}
                        </span>
                    </Link>
                </S.DeveloperLinkWrapper>
            </S.TitleWrapper>
        </S.Positioner>
        <Intro />
    </>
    )
}

export default Header
