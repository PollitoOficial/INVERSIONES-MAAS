export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="h-40 bg-gray-200 flex items-center justify-center mb-4">
        {product.image 
          ? <img src={product.image} alt={product.name} className="max-h-full" />
          : <span className="text-gray-500">Sin imagen</span>
        }
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-blue-600">{product.price}</p>
    </div>
  );
}
