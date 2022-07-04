import styled from "styled-components";
import { Times } from "./time";
import { Calendar } from "./calendar";
import { Caption } from "./header/caption";
const Header = styled.div`
    position: sticky;
    top: 0;
    margin-bottom: 10px;
    grid-area: header;
`;

const Date = styled.div`
    background-color: pink;
    height: 100px;
    background-color: ${(props) => props.theme.colors.background};
`;
const Footer = styled.div`
    grid-area: footer;
    position: sticky;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.background};
`;
const GridLayout = styled.div`
    display: grid;
    row-gap: 10px;
    min-width: 320px;
    max-width: 740px;
    grid-template-areas:
        "header header"
        "time calendar"
        "footer footer";
    grid-template-rows: 15% auto 5%;
    grid-template-columns: 11% auto;
`;
export const Test = () => {
    return (
        <GridLayout>
            <Header>
                <Caption />
                <Date />
            </Header>
            <Times gridArea="time" />
            <Calendar gridArea="calendar" />
            <Footer />
        </GridLayout>
    );
};
