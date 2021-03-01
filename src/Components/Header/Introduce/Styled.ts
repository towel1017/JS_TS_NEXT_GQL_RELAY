import Image from "next/image";
import styled from "styled-components";

export const IntroWrapper = styled.div`
    width: 100%;
    background-color : #6E6EFF;
    display : flex;
    flex-direction : row;
    justify-content: center;
    height : 350px;
`;

export const IntroTextWrapper = styled.div`
    width: 50%;
    display : flex;
    flex-direction : column;
    justify-content: center;
`;

export const IntroTextFirst = styled.span`
    font-size : 100px;
    color : white;
    font-weight: 600;
    
`;

export const IntroTextSecond = styled.span`
    font-size: 18px;
    color : #dcdcdc;
    background-color : #8C8CFF;
    width: fit-content;
`;

export const IntroProfileWrapper = styled.div`
    align-self: center;
    background-color: white;
    border-radius: 100%;
    border: 10px solid white;
    box-shadow: 0.05px 0.05px 10px rgba(0,0,0,0.4);
`;

export const IntroProfileImage = styled(Image)`
    border-radius: 100%;
`;