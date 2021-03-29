import styled from "styled-components";

export const Positioner = styled.div`
    display : flex;
    width: 90%;
    align-self: center;
`;

export const ColorInputWrapper = styled.input`
    flex: 1;
    align-self: center;
    margin-top : 12px;
    padding: 20px;
    border : 1px solid gray;
    border-radius: 10px;
    box-shadow: 0.05px 0.05px 10px rgba(0,0,0,0.4);
    font-size: 22px;
    ::placeholder {
        color : #c8c8c8;
    }
`;

