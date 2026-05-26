interface DropdownProps {
  options: string[];
  label?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Dropdown({ options, label, name, value, onChange }: DropdownProps) {
  return (
    <label className="block">
      {label ? <span className="block mb-2 font-medium">{label}</span> : null}
      <select className="w-full rounded border px-3 py-2" value={value} name={name} onChange={onChange}>
        <option value="">-- Select an option --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
