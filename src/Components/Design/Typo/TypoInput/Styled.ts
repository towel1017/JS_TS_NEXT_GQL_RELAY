import styled from "styled-components"
import { TypoTextType } from "../../../../Store/TypoStore";

export const Positioner = styled.div`
    width : fit-content;
    margin : 10px;
    display : flex;
    flex-direction: column;
    align-self: center;
    border : 1px solid black;
    border-radius: 5px;
`;

export const OptionHeaderWrapper = styled.div`
    flex:1;
`;

export const TypoInputWrapper = styled.div`
    display : flex;

`;
export const TypoInput = styled.textarea<TypoTextType>`
    resize : none;
    flex : 1;
    padding : 25px;
    font-family : ${props => props.fontFamily};
    font-size : ${props => props.fontSize};
    font-weight : ${props => props.fontWeight};
    line-height: ${props => props.lineHeight};
    word-spacing: ${props => props.wordSpace};
    color : ${props => props.color};
`;

export const TypoButtonWrapper = styled.div`
    padding : 6px;
`;