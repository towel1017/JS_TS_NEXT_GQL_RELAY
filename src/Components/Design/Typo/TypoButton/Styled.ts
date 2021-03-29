import styled from "styled-components"


export const Positioner = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const TypoInfoTextWrapper = styled.div`
    span {
        color : gray;
    }
`;

export const TypoLanguageBtnWrapper = styled.div`
    display : flex;
    flex-direction: row;
    label {
        margin-right: 15px;
    }
`;

export const TypoButtonWrapper = styled.div`
    display : flex;
    justify-content: space-around;
    button {
        background-color: rgba(0,0,0,0);
        padding: 10px 15px 10px 15px;
        border: 1px solid blue;
        border-radius: 5px;
        margin-left : 30px;
    }
`;