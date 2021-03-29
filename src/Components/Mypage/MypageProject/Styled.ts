import styled from "styled-components";

export const Positioner = styled.div`
    display : flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color : #E9EEFF;
`;

export const MypageProfileProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: 50px;
`;

export const MypageProfileUserProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height : 30%;
`;

export const ProjectTitle = styled.span`
    width: 100%;
    border-bottom : 2px solid #003464;
    color : #003464;
    font-size: 22px;
    font-weight: 500;
    margin-bottom : 5px;
`;

export const ProjectTitleWrapper = styled.div`
    padding : 2px;
    height : 70px;
    display : flex;
    align-items: center;
    background-color : white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    span {
        font-size: 18px;
        flex: 1;
        margin-left : 25px;
    }
`;

export const ProjectList = styled.div`
    height: 100%;
    border-radius: 10px;
`;

export const ProjectItemList = styled.div`
    margin-top : 10px;
`;

export const ProjectItem = styled.div`
    padding : 2px;
    height : 70px;
    display : flex;
    align-items: center;
    background-color : white;
    margin-top: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    span {
        font-size: 16px;
        flex: 1;
        margin-left: 25px;
    }
`;

