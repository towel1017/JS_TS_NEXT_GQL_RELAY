import styled from "styled-components"


export const Positioner = styled.div`
    width : 70%;
    display : flex;
    flex-direction: column;
    margin : 3px;
`;

export const TitleWrapper  = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleText = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

export const DeveloperLinkWrapper = styled.div`
    align-self: flex-end;
    margin-left: 1rem;
    * {
        text-decoration: underline;
        font-size: 15px;
        color : #1478CD;
        font-weight: 700;
        cursor: pointer;
    }
`;

