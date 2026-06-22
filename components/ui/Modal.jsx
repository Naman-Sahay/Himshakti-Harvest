/**
 * Props:
 * title - modal heading
 */

export default function Modal({ title }) {
  return (
    <div className="border p-4 rounded bg-gray-100">
      <h2 className="font-bold">{title}</h2>
      <p>This is a modal window.</p>
    </div>
  );
}