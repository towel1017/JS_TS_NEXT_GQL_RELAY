import Image from "next/image";
import styled from "styled-components";

export const Positioner = styled.div`
    display : flex;
    align-items: center;
    flex-direction: column;
`;
export const DeveloperProFileWrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content : center;
    span {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
`;

export const DeveloperProfileImage = styled(Image)`
    border-radius: 100%;
`;

export const DeveloperProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin : 40px 0 0 0;
`;

export const ProfilePersonText = styled.span`
    font-size: 29px;
    font-weight: 800;
    color : #323232;
`;

export const ProfileToolText = styled.span`
    font-size: 29px;
    font-weight: 800;
    color : #323232;
    margin : 10px 0 0 14px;
`;

export const ProfileGithubText = styled.a`
    text-decoration: underline;
    color : #1478CD;
    font-weight: 700;
    margin : 100px 0 0 0;
    align-self: flex-end;
    font-size: 20px;
`;
