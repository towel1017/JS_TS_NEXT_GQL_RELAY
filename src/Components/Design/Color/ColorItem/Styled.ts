import styled from "styled-components"


export const Positioner = styled.div`
    display : flex;
    flex-direction: column;
`;


export const ColorWrappepr = styled.div<{ color: string }>`
    background-color : ${(props) => props.color};
    width : 110px;
    height : 110px;
    margin : 10px;
    border-radius: 2px;
    font-size: 24px;
    color: white;
    text-align: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color : white;
    }
    color : rgba(0,0,0,0);
    padding : 10px;
    box-shadow: 0.05px 0.05px 10px rgba(0,0,0,0.4);
`;

export const ColorText = styled.span`
    font-size: 20px;
    text-align: center;
`;