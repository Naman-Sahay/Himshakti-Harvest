/**
 * Props:
 * placeholder - input placeholder
 */

export default function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border p-2 rounded w-full"
    />
  );
}