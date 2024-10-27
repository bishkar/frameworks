import { ReserveItemProps } from './ReserveItem.props';

function ReserveItem({ data }: ReserveItemProps) {
  return (
    Object.entries(data).map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ))
  );
}

export default ReserveItem;