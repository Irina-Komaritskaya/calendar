import styled from "styled-components";
const Container = styled.div`
    grid-area: ${({ gridArea = "" }) => gridArea};
    color: ${(props) => props.theme.colors.textSecondary};
    ${(props) => props.theme.typography.textSmall};
    margin-top: -0.6em;
    margin-bottom: -0.6em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;
const Time = styled.div``;
export const Times = ({ gridArea }) => {
    return (
        <Container gridArea={gridArea}>
            {Array.from({ length: 24 }, (_, i) => {
                const time = i < 10 ? "0" + i + ":00" : i + ":00";
                return <Time>{time}</Time>;
            })}
        </Container>
    );
};
