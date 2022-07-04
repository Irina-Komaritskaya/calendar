import styled from "styled-components";
const Container = styled.div`
    grid-area: ${({ gridArea = "" }) => gridArea};
    background-color: ${(props) => props.theme.colors.background};
    margin-left: 5px;
`;
const Grid = styled.div`
    display: grid;
    gap: 0.1em;
    grid-template-rows: repeat(23, 40px);
    grid-template-columns: repeat(7, 1fr);
    border-top: 0.1em solid ${(props) => props.theme.colors.background};
    border-bottom: 0.1em solid ${(props) => props.theme.colors.background};
`;
const Cell = styled.div`
    background-color: white;
`;

export const Calendar = ({ gridArea }) => {
    return (
        <Container gridArea={gridArea}>
            <Grid>
                {Array.from({ length: 23 * 7 }, (_, i) => {
                    return <Cell />;
                })}
            </Grid>
        </Container>
    );
};
