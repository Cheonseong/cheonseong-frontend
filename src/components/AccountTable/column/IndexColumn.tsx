interface IndexColumnProps {
  index: number;
}

const IndexColumn = ({ index }: IndexColumnProps) => {
  return <td className="border border-gray-300 px-4 py-2">{index + 1}</td>;
};

export default IndexColumn;
