import styled from "styled-components";
const StyledCaption = styled.div`
    height: 70px;
    background-color: ${(props) => props.theme.colors.secondBackground};
    ${(props) => props.theme.typography.textLarge};
    color: ${(props) => props.theme.colors.textLarge};
`;

const H1 = styled.div``;

export const Caption = () => {
    return (
        <StyledCaption>
            <H1>Interwiew Calendar</H1>
        </StyledCaption>
    );
};
