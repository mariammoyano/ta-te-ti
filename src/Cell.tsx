interface CellProps {
  value?: string
  onCellClick: () => void
}

export const Cell = ({ value, onCellClick }: CellProps) => {
  return (
    <button
      className="cell"
      onClick={onCellClick}
    >
      {value}
    </button>
  )
}
