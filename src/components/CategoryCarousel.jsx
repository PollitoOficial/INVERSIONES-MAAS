export default function CategoryCarousel() {
  const cats = ['Ferretería','Alimentos','Limpieza','Higiene','Viveres'];
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Categorías</h2>
        <div className="flex overflow-x-auto space-x-4">
          {cats.map(c => (
            <div key={c} className="min-w-[120px] p-4 bg-gray-100 rounded-lg text-center">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
