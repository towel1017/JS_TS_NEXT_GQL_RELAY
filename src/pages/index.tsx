import Link from "next/link"
import styled from "styled-components";
import { Design, Header } from "../Components";

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
            <Design/>
        </Positioner>
    )
}

export default Index;