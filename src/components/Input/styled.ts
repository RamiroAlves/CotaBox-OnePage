import styled from "styled-components"

export const Input = styled.input`
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.black};
    margin-inline: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 220px;
    padding: 8px;

    @media (max-width: 550px) {
        width: 150px;
    }

    @media (max-width: 371px) {
        width: 120px;
    }
`;