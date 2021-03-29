import Image from "next/image";
import styled from "styled-components";

export const MypageProFileWrapper = styled.div`
    display : flex;
    flex-direction: column;
    background-color : #D5C2EE;
    justify-content: space-around;
`;
export const MypageProfileImageWrapper = styled.div`
    margin-top : 100px;
    margin : 200px 30px 0px 30px;
`;

export const MypageProfileImage = styled(Image)`
    border-radius: 100%;
    margin-top : 200px;
`;

export const MypagerProfileDetailWrapper = styled.div`
    display : flex;
    flex-direction: column;
    margin-bottom: 400px;
`;

export const MypageProfileDetailNick = styled.span`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top : 50px;
    color : #483D8B;
`;

export const MypageProfileDetailInfoWrapper = styled.div`
    margin-top: 20px;
    text-align: center;
    span {
        margin : 2px;
    }
`;