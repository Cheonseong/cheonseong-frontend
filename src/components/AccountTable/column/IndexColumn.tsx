import { accountTableCellStyle } from '../AccountTableBody';

interface IndexColumnProps {
  index: number;
}

const IndexColumn = ({ index }: IndexColumnProps) => {
  return <td className={accountTableCellStyle}>{index + 1}</td>;
};

export default IndexColumn;
