export default function ProductCard({ title, description, price }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <p className="mt-3 font-bold text-green-700">
        ₹{price}
      </p>
    </div>
  );
}