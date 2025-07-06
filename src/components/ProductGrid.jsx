import ProductCard from "./ProductCard";

const dummy = [
  { id:1, name:'Martillo', price:'$15', image:'' },
  { id:2, name:'Leche', price:'$2', image:'' },
  { id:3, name:'Detergente', price:'$5', image:'' },
  { id:4, name:'Planta', price:'$7', image:'' },
];

export default function ProductGrid() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dummy.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
