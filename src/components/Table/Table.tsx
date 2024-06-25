import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableDataCell,
  TableHeade,
  TableHeaderCell,
  TableRow,
} from "./styled";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { Button } from "../ConfirmModal/styles";

interface IProps {
  columns: IColumn[];
  data: IData[];
  onDelete: (id: string) => void;
}

export interface IColumn {
  campo: keyof IData | "id";
  label: string;
}

export interface IData {
  id: string;
  first_name: string;
  last_name: string;
  participation: number;
}

const TableDefault: React.FC<IProps> = ({ columns, data, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IData | null>(null);

  const handleDelete = (item: IData) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedItem) {
      onDelete(selectedItem.id);
      setIsModalOpen(false);
      setSelectedItem(null);
    }
  };

  const _renderRows = useMemo(() => {
    return data?.map((item: IData, index: number) => (
      <TableRow key={item.id}>
        {columns.map((col, idx) => {
          return (
            <TableDataCell key={idx}>
              {col.campo === "id"
                ? index + 1
                : col.campo === "participation"
                ? `${item[col.campo]}%`
                : item[col.campo as keyof IData]}
            </TableDataCell>
          );
        })}
        <TableDataCell>
          <Button onClick={() => handleDelete(item)}>Delete</Button>
        </TableDataCell>
      </TableRow>
    ));
  }, [columns, data]);
  return (
    <>
      <Table>
        <TableHeade>
          <TableRow>
            {columns.map((col, idx) => (
              <TableHeaderCell key={idx}>{col.label}</TableHeaderCell>
            ))}
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeade>
        <TableBody>{_renderRows}</TableBody>
      </Table>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        itemName={`${selectedItem?.first_name} ${selectedItem?.last_name}`}
      />
    </>
  );
};

export default TableDefault;
