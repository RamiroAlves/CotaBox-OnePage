import { useMemo } from "react";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHeade,
  TableHeaderCell,
  TableRow,
} from "./styled";

interface IProps {
  columns: IColumn[];
  data: IData[];
}

export interface IColumn {
  campo: keyof IData | 'id';
  label: string;
}

export interface IData {
  id: string;
  first_name: string;
  last_name: string;
  participation: number;
}

const TableDeftault: React.FC<IProps> = ({ columns, data }) => {
  const _renderRows = useMemo(() => {
    return data?.map((item: IData, index: number) => (
      <TableRow key={item.id}>
        {columns.map((col, idx) => {
          return (
            <TableDataCell key={idx}>
              {col.campo === 'id' 
              ? index + 1 
              : col.campo === 'participation' 
              ? `${item[col.campo]}%`
              : item[col.campo as keyof IData]}
            </TableDataCell>
          );
        })}
      </TableRow>
    ));
  }, [columns, data]);
  return (
    <Table>
      <TableHeade>
        <TableRow>
          {columns.map((col, idx) => (
            <TableHeaderCell key={idx}>{col.label}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeade>
      <TableBody>{_renderRows}</TableBody>
    </Table>
  );
};

export default TableDeftault;
