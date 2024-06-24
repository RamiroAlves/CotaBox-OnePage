import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    padding: 10px;

    @media (max-width: 910px) {
        height: 120px;
    }

    @media (max-width: 767px) {
     justify-content: flex-start;
    }
`;