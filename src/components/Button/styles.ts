import styled from "styled-components";

export const Button = styled.button`
    border-radius: ${props => props.theme.borderRadius};
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.backgroundColor};
    cursor: pointer;
    margin-inline: 10px;
    margin-bottom: 10px;
    height: 56px;
    width: 120px;
    transition: all 0.3s linear;

    &:hover {
        background-color: ${props => props.theme.colors.backgroundColor};
        border: 1px solid ${props => props.theme.colors.backgroundColor};
        color: ${props => props.theme.colors.black}
    }
`;