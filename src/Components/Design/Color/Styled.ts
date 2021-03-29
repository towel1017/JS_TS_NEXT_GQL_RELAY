import styled from "styled-components";

export const Positioner = styled.div`
    display : flex;
    flex-direction: column;
    &:hover {
        div > div > .edit-delete-btn {
            opacity: 0.7;
        }
    }
`;

export const ColorListWrapper = styled.div`
    display : flex;
    flex-direction : row;
    overflow-x: auto;
`;

export const ColorEditDeleteWrapper = styled.div`
    display : flex;
    width : 100%;
    justify-content: flex-end;
`;

export const ColorEditDeleteButtonWrapper = styled.div`
    width : 80px;
    display : flex;
    justify-content: space-around;
    .edit-delete-btn {
        opacity: 0;
    }
`;

export const ColorEditButton = styled.button`
    padding :15px 22px;
    background-color: #0A82FF;
    border : none;
    border-radius: 2px;
    color : white;
`;

export const ColorEditInput = styled.input`
    width: 80%;
    font-size : 18px;
    padding : 15px;
    border : 1px solid black;
    box-shadow: 0.05px 0.05px 10px rgba(0,0,0,0.4);
`;