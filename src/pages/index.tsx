import Link from "next/link"
import styled from "styled-components";
import { Header } from "../Components";

const Positioner = styled.div`
    width: 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const Index = () => {
    return (
        <Positioner>
            <Header />
        </Positioner>
    )
}

export default Index;