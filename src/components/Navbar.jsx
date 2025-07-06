export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="INVERMAAS" className="h-8" />
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#" className="hover:text-blue-600">Inicio</a></li>
          <li><a href="#" className="hover:text-blue-600">Categorías</a></li>
          <li><a href="#" className="hover:text-blue-600">Ofertas</a></li>
          <li><a href="#" className="hover:text-blue-600">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
