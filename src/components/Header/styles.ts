import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
`;