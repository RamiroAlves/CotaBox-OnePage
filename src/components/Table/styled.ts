import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
    margin-bottom: 1rem;
    vertical-align: top;
    width: 50%;
`;

export const TableHeade = styled.thead`
    vertical-align: bottom;
`;

export const TableRow = styled.tr`
    border: 1px solid ${props => props.theme.colors.gray};
    `;

export const TableHeaderCell = styled.th`
    background-color: ${props => props.theme.colors.backgroundColor};
    box-shadow: inset 0 0 0 9999px initial, initial, transparent;
    border: 1px solid ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.black};
    padding: 8px;
    text-align: center;
    `;

export const TableBody = styled.tbody`
    & > tr:hover {
        background-color: rgba(8, 10, 12, 0.075);
    }
    `;

export const TableDataCell = styled.td`
    border: 1px solid ${props => props.theme.colors.gray};
    padding: 8px;
    text-align: center;
`;