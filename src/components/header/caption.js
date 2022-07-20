import styled from "styled-components";
const StyledCaption = styled.div`
    height: 70px;
    background-color: ${(props) => props.theme.colors.secondBackground};
`;

const H1 = styled.div`
    ${(props) => props.theme.typography.textLarge};
    color: ${(props) => props.theme.colors.textLarge};
`;

export const Caption = () => {
    return (
        <StyledCaption>
            <H1>Interwiew Calendar</H1>
        </StyledCaption>
    );
};
